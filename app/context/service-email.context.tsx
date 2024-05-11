'use client';
import { createContext } from "react";
import { sendEmail } from "../resend-email/send-email";

export class EmailDto {
  name!: string;
  email!: string;
  message!: string;
}

export class EmailContextProps {
  setEmail!: (email: EmailDto) => void;
}

export const EmailContext = createContext(new EmailContextProps());

export const EmailProvider = ({ children }: {children: React.ReactNode}) => {

  const setEmail = (email: EmailDto) => {
    sendEmail(email);
  }

  return (
    <EmailContext.Provider value={{setEmail}}>
      {children}
    </EmailContext.Provider>
  )
}