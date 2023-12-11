// pages/api/sendEmail.js

import nodemailer from 'nodemailer';
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        // Read the request body and parse it as JSON
        const body = await request.json();
        const { name, email, subject, message } = body;


        // Set up your nodemailer transporter with your email provider's settings
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from:{
                name : 'portfolio',
                address: process.env.EMAIL_USER,
            } , // Use the provided 'from' or fallback to the user's email
            to: 'houssemdahel.dk@gmail.com',
            subject: subject,
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                        body {
                            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                            background-color: #f5f5f5;
                            color: #333;
                            padding: 20px;
                            margin: 0;
                        }
                        h2 {
                            color: #007BFF;
                            margin-bottom: 20px;
                        }
                        strong {
                            color: #6C757D;
                        }
                        p {
                            margin-bottom: 10px;
                        }
                        .email-container {
                            max-width: 600px;
                            margin: 0 auto;
                            background-color: #fff;
                            padding: 20px;
                            border-radius: 8px;
                            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
                        }
                        .footer {
                            margin-top: 20px;
                            font-size: 12px;
                            color: #999;
                        }
                    </style>
                </head>
                <body>
                    <div class="email-container">
                        <h2>New Message from your Website Contact Form</h2>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Subject:</strong> ${subject}</p>
                        <p><strong>Message:</strong></p>
                        <p>${message}</p>
                        <div class="footer">
                            <p>This email was sent from your website's contact form. Do not reply to this email.</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
        };


        // Send the email
        const result = await transporter.sendMail(mailOptions);

        if (result) {
            return NextResponse.json({ message: 'Email Sent Successfully' }, { status: 200 });
        } else {
            return NextResponse.json({ message: 'Error Sending Email' }, { status: 500 });
        }

    }
    catch (e) {



        return NextResponse.json(
            {
                message: "Something Went Wrong While Trying To Send Email",
                result: e,
            },
            { status: 500 }
        );

    }
}















