import { NextResponse } from 'next/server';
import { sendRSVPConfirmation } from '@/app/services/emailService';

interface ErrorResponse {
  message: string;
  response?: {
    body?: unknown;
  };
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('RSVP Form Data:', data);

    // Send confirmation email
    await sendRSVPConfirmation(data.email, data.name);

    return NextResponse.json({ 
      success: true,
      message: 'RSVP submitted successfully. A confirmation email has been sent.'
    });
  } catch (error: unknown) {
    console.error('Error processing RSVP:', error);
    
    const err = error as ErrorResponse;
    // Determine the appropriate status code
    const statusCode = err.message.includes('authentication failed') ? 500 : 400;
    
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