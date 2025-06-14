import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('RSVP Form Data:', data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error processing RSVP:', error);
    return NextResponse.json({ success: false, error: 'Failed to process RSVP' }, { status: 400 });
  }
} 