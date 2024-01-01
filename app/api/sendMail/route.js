import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  let data = await req.json();

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.USER_EMAIL,
    to: process.env.USER_EMAIL,
    subject: `Message from ${data.name}`,
    text: data.message,
    html: `
      <h3>Information</h3>
      <ul>
        <li>Name: ${data.name}</li>
        <li>Email: ${data.email}</li>
      </ul>
      
      <h3>Message</h3>
      <p>${data.message}</p>
    `,
  };

  transporter
    .sendMail(mailData, (err, info) => {
      if (err) {
        return NextResponse.json({ send: false }, { status: 400 });
      }
      return NextResponse.json({ send: true }, { status: 200 });
    })
    .catch((error) => {
      return NextResponse.json({ send: false }, { status: 400 });
    });
}
