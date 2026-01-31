import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    // Forward to StaticForms
    const response = await fetch('https://api.staticforms.dev/submit', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      // Redirect back with success parameter
      const url = new URL(request.url);
      url.searchParams.set('success', 'true');
      return NextResponse.redirect(url);
    } else {
      // Redirect back with error
      const url = new URL(request.url);
      url.searchParams.set('error', 'true');
      return NextResponse.redirect(url);
    }
  } catch (error) {
    console.error('API submit error:', error);
    const url = new URL(request.url);
    url.searchParams.set('error', 'true');
    return NextResponse.redirect(url);
  }
}
