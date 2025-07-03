import { NextResponse, type NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Setup Upstash Redis
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, '10 s'), // 5 requests per 10 seconds
  analytics: true,
});

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  // 🧠 RATE LIMITING only for /api/rsvp
  if (request.nextUrl.pathname === '/api/rsvp') {
    const ip = request.headers.get('x-forwarded-for') ?? 'anonymous';

    const { success } = await ratelimit.limit(`rsvp_${ip}`);
    if (!success) {
      return new NextResponse('Too many requests', { status: 429 });
    }
  }

  // 🧠 Supabase session management
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (
    !user &&
    !request.nextUrl.pathname.startsWith('/login') &&
    !request.nextUrl.pathname.startsWith('/auth')
  ) {
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}

// 🔍 Apply to all routes
export const config = {
  matcher: ['/*'],
};
