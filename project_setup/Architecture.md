🏗️ Fivesixfive PA Conference – Updated Project Architecture
🚀 Tech Stack Summary
Layer	Technology
Framework	Next.js 13+ (App Router, TypeScript)
Styling	Tailwind CSS + Headless UI
Animation	Framer Motion
Forms	React Hook Form + Zod
Email Delivery	SendGrid (or Resend)
Data Storage	JSON / Markdown (flat files)
Auth (future)	Clerk / Auth.js
Newsletter	Buttondown / ConvertKit / Mailchimp
Analytics	Plausible / Vercel Analytics
Deployment	Vercel
Calendars (optional)	Calendly Embed

📁 File & Folder Structure
bash
Copy
Edit
fivesixfive-website/
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── .env.local
├── next.config.js
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── README.md
└── src/
    ├── app/
    │   ├── (site)/
    │   │   ├── layout.tsx
    │   │   ├── page.tsx
    │   │   └── conference/
    │   │       ├── page.tsx
    │   │       ├── register.tsx
    │   │       ├── speakers.tsx
    │   │       └── schedule.tsx
    │   ├── api/
    │   │   ├── rsvp/route.ts
    │   │   ├── contact/route.ts
    │   │   └── newsletter-signup/route.ts
    │   ├── sitemap.xml/route.ts
    │   └── robots.txt/route.ts
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx
    │   │   └── Footer.tsx
    │   ├── sections/conference/
    │   │   ├── Hero.tsx
    │   │   ├── AwaitYou.tsx
    │   │   ├── WhyAttend.tsx
    │   │   ├── BookYourSeat.tsx
    │   │   └── TestimonialSlider.tsx
    │   ├── forms/
    │   │   └── RSVPForm.tsx
    │   ├── ui/
    │   │   ├── Button.tsx
    │   │   ├── Container.tsx
    │   │   └── Divider.tsx
    │   └── features/
    │       ├── CountdownTimer.tsx
    │       ├── TestimonialsCarousel.tsx
    │       ├── ParallaxHero.tsx
    │       └── MotionReveal.tsx
    ├── content/
    │   ├── conference/
    │   │   ├── intro.mdx
    │   │   ├── testimonials.json
    │   │   └── speakers.json
    ├── hooks/
    │   ├── useCountdown.ts
    │   ├── useInViewAnimate.ts
    │   └── useForm.ts
    ├── lib/
    │   ├── framer.ts
    │   ├── contentParser.ts
    │   └── analytics.ts
    ├── services/
    │   └── emailService.ts
    ├── styles/
    │   ├── globals.css
    │   └── tokens.ts
    └── types/
        ├── index.ts
        ├── api.ts
        └── content.ts
🧩 Directory Responsibilities
/src/app/
Handles all routing and API logic.

app/(site)/: Main site route group.

conference/: Entry point for the PA Conference pages.

api/: Modular REST-style API routes:

rsvp/route.ts: Accept RSVP form submissions, validate, and send email.

newsletter-signup/route.ts: Add email to Buttondown/Mailchimp list.

contact/route.ts: Contact form handler.

SEO pages:

sitemap.xml/route.ts

robots.txt/route.ts

/src/components/
All UI elements and content blocks.

layout/: Site-wide components (Navbar, Footer).

sections/conference/: Landing page sections (Hero, WhyAttend, etc.).

forms/: Form components like RSVPForm.tsx.

ui/: Basic styled components (Button, Container).

features/: Self-contained functionality (Countdown, Carousel, MotionEffects).

/src/content/
Flat content storage:

Markdown (e.g., intro.mdx)

JSON (e.g., testimonials.json, speakers.json)

Easily upgradeable to CMS later

/src/hooks/
Reusable custom hooks:

useCountdown: Timer logic for CountdownTimer.tsx

useInViewAnimate: Intersection observer for Framer-triggered animations

useForm: Form state, validation, and submit handlers

/src/lib/
Utilities and helpers:

framer.ts: Motion variants

contentParser.ts: Markdown or JSON loader

analytics.ts: Hook for Plausible or Vercel Analytics

/src/services/
Abstracts all external service integrations:

emailService.ts: Sends email confirmations using SendGrid or Resend

/src/styles/
Styling and design tokens:

globals.css: Tailwind base and global styles

tokens.ts: Color, font, and spacing tokens shared across app

/src/types/
TypeScript types for API and content safety:

api.ts: Request and response body types

content.ts: Structure of speakers, testimonials, etc.

🧠 State Management & Service Connection
Area	How It Works
Form State	Managed via react-hook-form + Zod in RSVPForm.tsx, logic extracted in useForm.ts
Countdown State	Local to CountdownTimer.tsx with timer logic in useCountdown.ts
Motion Effects	Controlled by useInViewAnimate.ts and motion variants in framer.ts
Data Fetching	Static content via contentParser.ts, dynamic content via API routes
API Services	/api/rsvp calls emailService.ts to email and optionally persist form data
Email Confirmations	Sent on successful RSVP via SendGrid/Resend
Analytics	Custom page/view events via lib/analytics.ts and Plausible

✅ Starting Simple: Initial Capabilities
📬 Booking: /register with working RSVPForm.tsx and /api/rsvp route

✉️ Email Confirmations: Use SendGrid free tier + emailService.ts

📰 Newsletter Opt-in: Submit to /api/newsletter-signup, store email or connect to Mailchimp

👁️‍🗨️ Scroll Animations: All sections animated with MotionReveal + Framer

📊 Analytics: Add Plausible tracking in layout.tsx

