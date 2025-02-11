export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate input
    if (!body.person_name || !body.message) {
      return new Response('Invalid request: Missing required fields', { status: 400 });
    }

    // Log the received data (optional)
    console.log('Received contact form submission:', body);

    return new Response('Form submission received successfully', { status: 200 });

  } catch (error) {
    console.error('Error processing request:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
