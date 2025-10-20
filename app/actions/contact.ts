"use server"

import { headers } from "next/headers"

// Simple in-memory rate limiting (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimitMap.get(ip)

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 }) // 1 minute window
    return true
  }

  if (limit.count >= 3) {
    // Max 3 requests per minute
    return false
  }

  limit.count++
  return true
}

export async function submitContactForm(formData: FormData) {
  try {
    // Get IP for rate limiting
    const headersList = await headers()
    const ip = headersList.get("x-forwarded-for") || headersList.get("x-real-ip") || "unknown"

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return {
        success: false,
        error: "Too many requests. Please try again later.",
      }
    }

    // Honeypot check
    const honeypot = formData.get("website")
    if (honeypot) {
      return {
        success: false,
        error: "Invalid submission.",
      }
    }

    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const company = formData.get("company") as string
    const message = formData.get("message") as string

    // Validate required fields
    if (!name || !email || !message) {
      return {
        success: false,
        error: "Please fill in all required fields.",
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: "Please enter a valid email address.",
      }
    }

    // In production, send email here
    // For now, just log the submission
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      company,
      message,
      timestamp: new Date().toISOString(),
    })

    // TODO: Implement email sending
    // Example with a webhook or email service:
    /*
    const response = await fetch(process.env.CONTACT_WEBHOOK_URL!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, company, message }),
    })
    
    if (!response.ok) {
      throw new Error('Failed to send email')
    }
    */

    return {
      success: true,
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      error: "An error occurred. Please try again later.",
    }
  }
}
