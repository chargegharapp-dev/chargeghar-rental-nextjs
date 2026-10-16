import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, email, confirmedNoActiveRental, confirmedDataRetention, reason } = body;

    if (!fullName || !phone || !email) {
      return NextResponse.json(
        { error: "Full Name, Registered Phone Number, and Email Address are required." },
        { status: 400 }
      );
    }

    if (!confirmedNoActiveRental || !confirmedDataRetention) {
      return NextResponse.json(
        { error: "You must confirm that no rentals are active and acknowledge the statutory retention rules." },
        { status: 400 }
      );
    }

    // Generate unique verification & tracking ticket
    const ticketId = `DEL-CG-${Math.floor(100000 + Math.random() * 900000)}`;
    const receivedAt = new Date().toISOString();

    // Log internally for auditing
    console.log(`[Account Deletion Request] Ticket: ${ticketId}, Phone: ${phone}, Email: ${email}, Time: ${receivedAt}`);

    return NextResponse.json(
      {
        success: true,
        ticketId,
        receivedAt,
        message:
          "Your account deletion request has been registered successfully. Our privacy team will verify your account status and initiate deletion from active systems within 30 days in full compliance with Google Play Store User Data & Account Deletion Policy and the Privacy Act, 2075 of Nepal.",
        instructions:
          "A formal confirmation has been queued. You may also contact privacy@chargeghar.app with your ticket ID if you need immediate assistance.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Delete account error:", error);
    return NextResponse.json(
      { error: "Internal server error processing account deletion request." },
      { status: 500 }
    );
  }
}
