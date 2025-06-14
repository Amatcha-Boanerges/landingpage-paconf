import sgMail from '@sendgrid/mail';

interface SendGridError {
  message: string;
  code: number;
  response?: {
    body?: unknown;
  };
}

export async function sendRSVPConfirmation(to: string, name: string) {
  // Check for environment variables at runtime
  if (!process.env.SENDGRID_API_KEY || !process.env.EMAIL_FROM) {
    console.warn('SendGrid configuration missing. Skipping email send.');
    return null;
  }

  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to,
      from: process.env.EMAIL_FROM,
      subject: 'Thank you for your RSVP to PA Conference 2024',
      text: `Dear ${name},\n\nThank you for registering for PA Conference 2024. We look forward to seeing you there!\n\nBest regards,\nPA Conference Team`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank you for your RSVP!</h2>
          <p>Dear ${name},</p>
          <p>Thank you for registering for PA Conference 2024. We look forward to seeing you there!</p>
          <p>Best regards,<br>PA Conference Team</p>
        </div>
      `,
    };

    const response = await sgMail.send(msg);
    console.log('Email sent successfully:', response);
    return response;
  } catch (error: unknown) {
    console.error('Detailed SendGrid error:', {
      message: (error as SendGridError).message,
      code: (error as SendGridError).code,
      response: (error as SendGridError).response?.body,
    });

    const err = error as SendGridError;

    if (err.code === 403) {
      throw new Error(
        'SendGrid authentication failed. Please check your API key and sender verification.'
      );
    }

    if (err.code === 401) {
      throw new Error('SendGrid API key is invalid or unauthorized.');
    }

    throw new Error(`Failed to send email: ${err.message}`);
  }
} 