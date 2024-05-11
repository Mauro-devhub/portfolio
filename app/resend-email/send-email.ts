'use server';
import { Resend } from "resend";
import { EmailDto } from "../context/service-email.context";

const resend = new Resend(process.env.API_KEY_EMAIL);

export const sendEmail = async (emailObj: EmailDto) => {
  const { email, name, message } = emailObj;
  try {
    await resend.emails.send({
      from: `${name} ${email} <onboarding@resend.dev>`,
      to: ['dsmauricio16@gmail.com'],
      subject: `New message of ${name} from portfolio page`,
      html: `
        <h1>${name}</h1>
        <br />
        <span>This is email person try connect you [${email}]</span>
        <br />
        Message:
        <br />
        <strong>${message}</strong>
      `
    })
  } catch (error: any) {
    console.error('Have ocurred an error');
    console.error(error.message);
  }
}