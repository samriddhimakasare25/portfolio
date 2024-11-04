import client from '@/config/postmark';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Type assertion with environment variable checks
    const fromEmail = process.env.EMAIL_FROM;
    const toEmail = process.env.EMAIL_TO;

    if (!fromEmail || !toEmail) {
      throw new Error('Environment variables EMAIL_FROM and EMAIL_TO must be set.');
    }

    // Validate the incoming request body
    if (!body.person_name || !body.company || !body.message || !body.email) {
      throw new Error('Missing required fields in the request body.');
    }

    await client.sendEmail({
      From: fromEmail,
      To: toEmail,
      Subject: 'Portfolio Contact Form',
      HtmlBody: `
        <h1>Portfolio Contact Form</h1>
        <p><strong>Name:</strong> ${body.person_name}</p>
        <p><strong>Company:</strong> ${body.company}</p>
        <p><strong>Message:</strong> ${body.message}</p>
      `,
      ReplyTo: body.email,
    });

    return new Response('ok', { status: 200 });
  } catch (e) {
    console.error('Error occurred while sending email:', e); // Log the error for debugging
    return new Response('Internal Server Error', { status: 500 });
  }
}
