import client from '@/config/postmark';

export async function POST(request: Request) {
  const body = await request.json();
  try {
    const fromEmail = process.env.EMAIL_FROM as string; // Type assertion
    const toEmail = process.env.EMAIL_TO as string; // Type assertion

    // Optional: Add checks to throw an error if the environment variables are not defined
    if (!fromEmail || !toEmail) {
      throw new Error('Environment variables EMAIL_FROM and EMAIL_TO must be set.');
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
    return new Response('error', { status: 500 });
  }
}
