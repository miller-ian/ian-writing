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
    console.log(process.env.RESEND_API_KEY ? "Key found" : "Key missing")
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set in environment variables')
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      )
    }

    // Check if FROM_EMAIL is configured (must be from a verified domain)
    if (!process.env.FROM_EMAIL) {
      console.error('FROM_EMAIL is not set in environment variables')
      return NextResponse.json(
        { 
          error: 'Email sender not configured. Please verify a domain in Resend and set the FROM_EMAIL environment variable to an email address from your verified domain (e.g., noreply@yourdomain.com).',
        },
        { status: 500 }
      )
    }

    // Send email using Resend
    const { Resend } = await import('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    const fromEmail = process.env.FROM_EMAIL
    // Use TO_EMAIL from env for local testing, fallback to production email
    const toEmail = process.env.TO_EMAIL || 'imiller7255@gmail.com'
    
    console.log('Environment variables check:', {
      FROM_EMAIL: process.env.FROM_EMAIL,
      TO_EMAIL: process.env.TO_EMAIL,
      'TO_EMAIL (resolved)': toEmail,
    })
    
    console.log('Attempting to send email:', {
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      hasApiKey: !!process.env.RESEND_API_KEY,
    })
    
    try {
      const result = await resend.emails.send({
        from: fromEmail,
        to: toEmail,
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
        if (result.error.message?.includes('domain') || result.error.message?.includes('verify') || result.error.message?.includes('test domain')) {
          return NextResponse.json(
            { 
              error: 'Domain verification required. The test domain can only send to your account email. Please verify a domain in Resend and update the FROM_EMAIL environment variable in AWS Amplify to use an email from your verified domain (e.g., noreply@yourdomain.com).',
              details: result.error.message,
              instructions: [
                '1. Go to Resend dashboard and verify your domain',
                '2. Once verified, update the FROM_EMAIL environment variable in AWS Amplify console',
                '3. Set FROM_EMAIL to an email address from your verified domain'
              ]
            },
            { status: 500 }
          )
        }
        
        // Check for API key errors
        if (result.error.message?.includes('API key') || result.error.message?.includes('invalid_token') || result.error.statusCode === 401) {
          return NextResponse.json(
            { 
              error: 'Invalid API key. Please check your RESEND_API_KEY environment variable in AWS Amplify.',
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
    } catch (resendError: any) {
      console.error('Resend API call failed:', resendError)
      return NextResponse.json(
        { 
          error: 'Failed to send email. Please try again later.',
          details: resendError.message || 'Network or API error occurred'
        },
        { status: 500 }
      )
    }
  } catch (error: any) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: `Failed to send email: ${error.message || 'Unknown error'}` },
      { status: 500 }
    )
  }
}

