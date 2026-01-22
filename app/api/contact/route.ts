import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set in environment variables')
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      )
    }

    // Send email using Resend
    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev'
    
    console.log('Attempting to send email:', {
      from: fromEmail,
      to: 'imiller7255@gmail.com',
      replyTo: email,
      hasApiKey: !!process.env.RESEND_API_KEY,
    })
    
    const result = await resend.emails.send({
      from: fromEmail,
      to: 'imiller7255@gmail.com',
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    console.log('Resend API response:', result)

    if (result.error) {
      console.error('Resend API error:', result.error)
      
      // Check for domain verification error
      if (result.error.message?.includes('domain') || result.error.message?.includes('verify')) {
        return NextResponse.json(
          { 
            error: 'Domain verification required. The test domain can only send to your account email. Please verify a domain in Resend and update the FROM_EMAIL environment variable.',
            details: result.error.message
          },
          { status: 500 }
        )
      }
      
      return NextResponse.json(
        { error: `Failed to send email: ${result.error.message || 'Unknown error'}` },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: result.data?.id },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: `Failed to send email: ${error.message || 'Unknown error'}` },
      { status: 500 }
    )
  }
}

