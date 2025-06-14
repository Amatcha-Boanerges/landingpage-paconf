import { NextResponse } from 'next/server';
import { sendRSVPConfirmation } from '@/app/services/emailService';

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
  } catch (error: any) {
    console.error('Error processing RSVP:', error);
    
    // Determine the appropriate status code
    const statusCode = error.message.includes('authentication failed') ? 500 : 400;
    
    return NextResponse.json(
      { 
        success: false,
        error: error.message || 'Failed to process RSVP',
        details: error.response?.body || null
      },
      { status: statusCode }
    );
  }
} 