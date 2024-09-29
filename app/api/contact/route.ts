import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Handles POST requests to /api

export async function POST(request: Request) {
    const serviceName = process.env.NEXT_PUBLIC_EMAIL_SERVICE;
    const myEmail = process.env.NEXT_PUBLIC_EMAIL_USER;
    const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;

    console.log('dealing with request');
    const formData = await request.formData();
    // const name = formData.get('name');
    const email = formData.get('email');
    // const message = formData.get('message');

    // create transporter object
    const transporter = nodemailer.createTransport({
        service: serviceName,
        secure: true,
        port: 465,
        auth: {
            user: myEmail, // 'uproffi@gmail.com',
            pass: password, //'ybjd alqv rezo bjow',
        },
    });

    try {
        transporter.sendMail({
            from: myEmail,
            to: 'kolchin.nv@gmail.com',
            subject: `Website activity from `,
            html: `
            <p>Name: </p>
            <p>Email: ${email}</p>
            <p>Message:  </p>
            `,
        });

        return NextResponse.json({ message: 'Success: email was sent' });
    } catch (error) {
        console.log(error);
        return new NextResponse(null, { status: 500 });
    }
}
