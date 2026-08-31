import { NextRequest, NextResponse } from 'next/server';
import { ContactPayload } from '@/types/contact';

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;

    if (body.honeypot) {
      return NextResponse.json({ success: true, messageId: 'ignored-bot' }, { status: 200 });
    }

    if (body.timestamp && Date.now() - body.timestamp < 1500) {
      return NextResponse.json({ success: true, messageId: 'ignored-fast' }, { status: 200 });
    }

    if (!body.name || !body.name.trim()) {
      return NextResponse.json({ success: false, error: 'Name is required' }, { status: 400 });
    }

    if (!body.email || !/^[^s@]+@[^s@]+.[^s@]+$/.test(body.email)) {
      return NextResponse.json({ success: false, error: 'Valid work email is required' }, { status: 400 });
    }

    if (!body.message || body.message.trim().length < 10) {
      return NextResponse.json({ success: false, error: 'Message must be at least 10 characters' }, { status: 400 });
    }

    if (!body.consent) {
      return NextResponse.json({ success: false, error: 'Consent is required' }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactToEmail = process.env.CONTACT_TO_EMAIL || 'contact@cerenetics.com';
    const resendFromEmail = process.env.RESEND_FROM_EMAIL || 'inquiries@cerenetics.com';

    if (resendApiKey) {
      try {
        const resendResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: resendFromEmail,
            to: contactToEmail,
            reply_to: body.email,
            subject: `[Cerenetics Inquiry] ${body.name} (${body.projectStage})`,
            text: `
New technical inquiry from Cerenetics contact portal:

Name: ${body.name}
Email: ${body.email}
Organization: ${body.organization || 'N/A'}
Phone: ${body.phone || 'N/A'}
Industry: ${body.industry}
Project Stage: ${body.projectStage}

Message:
${body.message}
            `.trim(),
          }),
        });

        if (!resendResponse.ok) {
          console.error('Resend API returned error status', await resendResponse.text());
          return NextResponse.json({
            success: false,
            fallbackRequired: true,
            error: 'Email provider temporarily unavailable.',
          }, { status: 503 });
        }

        const resendData = await resendResponse.json();
        return NextResponse.json({ success: true, messageId: resendData.id }, { status: 200 });
      } catch (providerError) {
        console.error('Email provider connection failure', providerError);
        return NextResponse.json({
          success: false,
          fallbackRequired: true,
          error: 'Email delivery network failure.',
        }, { status: 503 });
      }
    }

    console.log('[Contact API Mock Delivery]', {
      name: body.name,
      email: body.email,
      stage: body.projectStage,
      messageLength: body.message.length,
    });

    return NextResponse.json({
      success: true,
      messageId: `mock-${Date.now()}`,
    }, { status: 200 });

  } catch (err) {
    console.error('Unhandled contact API route error', err);
    return NextResponse.json({
      success: false,
      error: 'An internal server error occurred.',
    }, { status: 500 });
  }
}
