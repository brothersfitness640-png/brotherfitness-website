import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      phone,
      email = "Not provided",
      branch = "1st Branch (Kunchanapalli)",
      goal = "Fat Loss & Body Toning",
      timeSlot = "Morning (05:00 AM - 09:00 AM)",
      message = "No extra notes provided",
      source = "Website Contact Form",
    } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and Phone number are required." },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER || "brothers.fitness640@gmail.com";
    const gmailPass = (process.env.GMAIL_APP_PASSWORD || "ksaw bfsg qevu yshk").replace(/\s+/g, "");
    const adminEmail = process.env.ADMIN_EMAIL || "brothers.fitness640@gmail.com";

    // Setup nodemailer transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    const sanitizedPhone = phone.replace(/[^0-9]/g, "");
    const cleanPhoneForWa = sanitizedPhone.startsWith("91") && sanitizedPhone.length > 10
      ? sanitizedPhone
      : `91${sanitizedPhone}`;
    const whatsappLink = `https://wa.me/${cleanPhoneForWa}?text=${encodeURIComponent(
      `Hi ${name}, thank you for contacting Brother's Fitness! We received your booking for a Free 1-on-1 Trial Session at our ${branch}. When would you like to visit?`
    )}`;

    const dateStr = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    // Premium Branded Email Template
    const htmlTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Lead - Brother's Fitness</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #070707; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f3f4f6;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #070707; padding: 30px 15px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" style="max-width: 600px; background-color: #121214; border: 1px solid #27272a; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.8);">
              
              <!-- Gold Top Accent Bar -->
              <tr>
                <td style="height: 5px; background: linear-gradient(90deg, #E5A919, #F59E0B, #D97706);"></td>
              </tr>

              <!-- Header with Logo & Brand -->
              <tr>
                <td style="padding: 30px 30px 20px 30px; text-align: center; background: linear-gradient(180deg, #1c1917 0%, #121214 100%);">
                  <div style="display: inline-block; padding: 8px 16px; border-radius: 50px; background-color: rgba(229, 169, 25, 0.15); border: 1px solid #E5A919; color: #E5A919; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px;">
                    🏋️ NEW TRIAL & INQUIRY LEAD
                  </div>
                  <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #ffffff; text-transform: uppercase; letter-spacing: 1px;">
                    BROTHER'S <span style="color: #E5A919;">FITNESS</span>
                  </h1>
                  <p style="margin: 6px 0 0 0; font-size: 12px; color: #a1a1aa; letter-spacing: 0.5px;">
                    1-on-1 Personal Training Gym • 100% Results Guaranteed
                  </p>
                </td>
              </tr>

              <!-- Lead Alert Banner -->
              <tr>
                <td style="padding: 0 30px;">
                  <div style="background-color: #18181b; border: 1px solid #3f3f46; border-radius: 12px; padding: 15px 20px; text-align: center;">
                    <span style="color: #E5A919; font-size: 13px; font-weight: 600; text-transform: uppercase;">
                      Source: ${source}
                    </span>
                    <div style="color: #71717a; font-size: 11px; margin-top: 4px;">
                      Received on ${dateStr} (IST)
                    </div>
                  </div>
                </td>
              </tr>

              <!-- Lead Details Table -->
              <tr>
                <td style="padding: 25px 30px;">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                    
                    <tr>
                      <td style="padding: 12px 15px; background-color: #18181b; border-bottom: 1px solid #27272a; width: 35%; color: #a1a1aa; font-size: 12px; font-weight: 600; text-transform: uppercase;">
                        👤 Member Name
                      </td>
                      <td style="padding: 12px 15px; background-color: #18181b; border-bottom: 1px solid #27272a; color: #ffffff; font-size: 14px; font-weight: 600;">
                        ${name}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding: 12px 15px; background-color: #141416; border-bottom: 1px solid #27272a; color: #a1a1aa; font-size: 12px; font-weight: 600; text-transform: uppercase;">
                        📞 Phone Number
                      </td>
                      <td style="padding: 12px 15px; background-color: #141416; border-bottom: 1px solid #27272a; color: #E5A919; font-size: 14px; font-weight: 600;">
                        <a href="tel:${phone}" style="color: #E5A919; text-decoration: none;">${phone}</a>
                      </td>
                    </tr>

                    <tr>
                      <td style="padding: 12px 15px; background-color: #18181b; border-bottom: 1px solid #27272a; color: #a1a1aa; font-size: 12px; font-weight: 600; text-transform: uppercase;">
                        ✉️ Email
                      </td>
                      <td style="padding: 12px 15px; background-color: #18181b; border-bottom: 1px solid #27272a; color: #e4e4e7; font-size: 13px;">
                        ${email}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding: 12px 15px; background-color: #141416; border-bottom: 1px solid #27272a; color: #a1a1aa; font-size: 12px; font-weight: 600; text-transform: uppercase;">
                        🏢 Selected Branch
                      </td>
                      <td style="padding: 12px 15px; background-color: #141416; border-bottom: 1px solid #27272a; color: #ffffff; font-size: 13px; font-weight: 600;">
                        ${branch}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding: 12px 15px; background-color: #18181b; border-bottom: 1px solid #27272a; color: #a1a1aa; font-size: 12px; font-weight: 600; text-transform: uppercase;">
                        🎯 Fitness Goal
                      </td>
                      <td style="padding: 12px 15px; background-color: #18181b; border-bottom: 1px solid #27272a; color: #fde047; font-size: 13px;">
                        ${goal}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding: 12px 15px; background-color: #141416; border-bottom: 1px solid #27272a; color: #a1a1aa; font-size: 12px; font-weight: 600; text-transform: uppercase;">
                        ⏰ Preferred Time
                      </td>
                      <td style="padding: 12px 15px; background-color: #141416; border-bottom: 1px solid #27272a; color: #e4e4e7; font-size: 13px;">
                        ${timeSlot}
                      </td>
                    </tr>

                    <tr>
                      <td style="padding: 12px 15px; background-color: #18181b; color: #a1a1aa; font-size: 12px; font-weight: 600; text-transform: uppercase; vertical-align: top;">
                        📝 Message / Notes
                      </td>
                      <td style="padding: 12px 15px; background-color: #18181b; color: #d4d4d8; font-size: 13px; line-height: 1.5;">
                        ${message}
                      </td>
                    </tr>

                  </table>
                </td>
              </tr>

              <!-- Quick Action CTA Buttons -->
              <tr>
                <td style="padding: 0 30px 25px 30px; text-align: center;">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center">
                        <a href="${whatsappLink}" target="_blank" style="display: inline-block; padding: 14px 28px; background-color: #25D366; color: #ffffff; text-decoration: none; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; border-radius: 50px; box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4); margin-bottom: 10px;">
                          💬 Chat on WhatsApp with ${name}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td align="center">
                        <a href="tel:${phone}" style="display: inline-block; padding: 10px 20px; background-color: transparent; border: 1px solid #E5A919; color: #E5A919; text-decoration: none; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; border-radius: 50px;">
                          📞 Call Direct (+91 ${phone})
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Refund Guarantee Reminder -->
              <tr>
                <td style="padding: 0 30px 25px 30px;">
                  <div style="background: rgba(229, 169, 25, 0.08); border: 1px dashed rgba(229, 169, 25, 0.4); border-radius: 12px; padding: 12px 16px; text-align: center;">
                    <span style="color: #E5A919; font-size: 11px; font-weight: 600; text-transform: uppercase;">
                      🛡️ Gym Policy Reminder:
                    </span>
                    <p style="margin: 4px 0 0 0; color: #d4d4d8; font-size: 11px; line-height: 1.4;">
                      Every candidate is entitled to dedicated 1-on-1 personal training. 100% money refund applies if diet and workout instructions are followed with zero physical improvement.
                    </p>
                  </div>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding: 20px 30px; background-color: #0c0c0e; text-align: center; border-top: 1px solid #27272a; color: #71717a; font-size: 11px;">
                  <p style="margin: 0 0 6px 0;">Brother's Fitness Official Lead Notification System</p>
                  <p style="margin: 0; color: #52525b;">1st Branch: Kunchanapalli (522501) • 2nd Branch: KL University Road (522502)</p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
    `;

    // Send Mail
    await transporter.sendMail({
      from: `"Brother's Fitness System" <${gmailUser}>`,
      to: adminEmail,
      subject: `🚨 New Lead: ${name} (${goal}) - ${branch}`,
      text: `New Lead Details:\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nBranch: ${branch}\nGoal: ${goal}\nTime Slot: ${timeSlot}\nMessage: ${message}\nSource: ${source}\nDate: ${dateStr}`,
      html: htmlTemplate,
    });

    return NextResponse.json({
      success: true,
      message: "Lead received and email sent to admin successfully.",
    });
  } catch (error: any) {
    console.error("Error processing lead submission:", error);
    return NextResponse.json(
      {
        error: "Failed to send email notification.",
        details: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
