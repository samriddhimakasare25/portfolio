// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server'; // Import the NextRequest type
var client = require('@/config/postmark');

export async function POST(request: NextRequest) { // Define request type
  const body = await request.json();

  try {
    await client.sendEmail({
      From: process.env.EMAIL_FROM || '',
      To: process.env.EMAIL_TO || '',
      Subject: 'Portfolio Contact Form',
      HtmlBody: `
        <h1>Portfolio Contact Form</h1>
        <p><strong>Name:</strong> ${body.person_name}</p>
        <p><strong>Company:</strong> ${body.company}</p>
        <p><strong>Message:</strong> ${body.message}</p>
      `,
      ReplyTo: body.email,
    });
    return NextResponse.json({ status: 'ok' });
  } catch (error) {
    console.error('Email sending failed:', error); // Logs error details
    return NextResponse.json({ status: 'error', message: 'Failed to send email' }, { status: 500 });
  }
}
