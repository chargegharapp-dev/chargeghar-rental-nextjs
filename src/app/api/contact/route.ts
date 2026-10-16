import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, subject, message } = body;

    if (!fullName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Full Name, Email, Subject, and Message are required." },
        { status: 400 }
      );
    }

    const ticketId = `SUP-CG-${Math.floor(100000 + Math.random() * 900000)}`;
    const isEmergency = subject === "Rental Issue";
    const sla = isEmergency ? "Within 2 Hours (24/7 Active Rental Emergency)" : "Within 24 Hours";

    console.log(`[Support Ticket] Ticket: ${ticketId}, Subject: ${subject}, From: ${email}`);

    return NextResponse.json(
      {
        success: true,
        ticketId,
        sla,
        message: `Thank you for contacting Charge Ghar Support. Your ticket ${ticketId} has been created. Our team will review your inquiry ${sla.toLowerCase()}.`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit message. Please try again or email support@chargeghar.app." },
      { status: 500 }
    );
  }
}
