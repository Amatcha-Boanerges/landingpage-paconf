import { NextResponse } from 'next/server';
import { sendRSVPConfirmation } from '@/app/services/emailService';

interface ErrorResponse {
  message: string;
  response?: {
    body?: unknown;
  };
}

// Only allow POST requests
export async function POST(request: Request) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const data = await request.json();
    console.log('RSVP Form Data:', data);

    // Send confirmation email
    const emailResult = await sendRSVPConfirmation(data.email, data.name);
    const emailSent = emailResult !== null;

    return NextResponse.json({ 
      success: true,
      message: emailSent 
        ? 'RSVP submitted successfully. A confirmation email has been sent.'
        : 'RSVP submitted successfully.'
    });
  } catch (error: unknown) {
    console.error('Error processing RSVP:', error);
    
    const err = error as ErrorResponse;
    const statusCode = err.message?.includes('authentication failed') ? 500 : 400;

    return NextResponse.json(
      { 
        success: false,
        error: err.message || 'Failed to process RSVP',
        details: err.response?.body || null
      },
      { status: statusCode }
    );
  }
}

// Optional: explicitly reject unsupported methods
export function GET() {
  return new Response('Method Not Allowed', { status: 405 });
}

export function PUT() {
  return new Response('Method Not Allowed', { status: 405 });
}

export function DELETE() {
  return new Response('Method Not Allowed', { status: 405 });
}
