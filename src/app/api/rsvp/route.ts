import { NextResponse } from 'next/server';
import { sendRSVPConfirmation } from '@/app/services/emailService';
import validator from 'validator';

interface ErrorResponse {
  message: string;
  response?: { body?: unknown };
}

export async function POST(request: Request) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const { name, email, captcha } = await request.json();

    // CAPTCHA check
    const captchaVerify = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
    });

    const captchaData = await captchaVerify.json();
    if (!captchaData.success) {
      return NextResponse.json({ success: false, error: 'Failed CAPTCHA verification' }, { status: 403 });
    }

    // Basic sanitization
    const sanitizedName = validator.escape(validator.trim(name));
    const sanitizedEmail = validator.normalizeEmail(email);

    if (!sanitizedName || !sanitizedEmail || !validator.isEmail(sanitizedEmail)) {
      return NextResponse.json({ success: false, error: 'Invalid form data' }, { status: 400 });
    }

    const emailResult = await sendRSVPConfirmation(sanitizedEmail, sanitizedName);
    const emailSent = emailResult !== null;

    return NextResponse.json({
      success: true,
      message: emailSent
        ? 'RSVP submitted successfully. A confirmation email has been sent.'
        : 'RSVP submitted successfully.',
    });
  } catch (error: unknown) {
    console.error('Error processing RSVP:', error);
    const err = error as ErrorResponse;
    const statusCode = err.message?.includes('authentication failed') ? 500 : 400;

    return NextResponse.json(
      {
        success: false,
        error: err.message || 'Failed to process RSVP',
        details: err.response?.body || null,
      },
      { status: statusCode }
    );
  }
}

export function GET() {
  return new Response('Method Not Allowed', { status: 405 });
}
export function PUT() {
  return new Response('Method Not Allowed', { status: 405 });
}
export function DELETE() {
  return new Response('Method Not Allowed', { status: 405 });
}
