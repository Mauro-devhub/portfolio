import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { EmailProvider } from "./context/service-email.context";

const inter = Montserrat({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  title: "Mauricio Sánchez"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full scroll-smooth" lang="en">
      <EmailProvider>
        <body className={`bg-[rgb(243,243,243)] overflow-x-hidden w-full flex flex-col items-center ${inter.className}`}>{children}</body>
      </EmailProvider>
    </html>
  );
}
