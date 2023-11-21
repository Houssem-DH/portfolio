import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const nodemailer = require("nodemailer");
        const reqBody = await request.json()
        const { name, email, subject, message } = reqBody;

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
              // TODO: replace `user` and `pass` values from <https://forwardemail.net>
              user: process.env.local.EMAIL,
              pass: process.env.local.PASS
            }
          });

        const mailOption = {
            from: email,
            to: 'houssemoodahel@gmail.com',
            subject: subject,
            html: `
        <h3>Hello Houssem</h3>
        <li> Name: ${name}</li>
        <li> Subject: ${subject}</li>
        <li> message: ${message}</li> 
        `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
    }
}