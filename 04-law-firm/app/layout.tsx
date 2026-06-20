import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "مكتب الوفاء للمحاماة والاستشارات القانونية | Al-Wafa Law Firm",
  description:
    "مكتب محاماة واستشارات قانونية يقدم خدمات تأسيس شركات، عقود، قضايا تجارية، وتحكيم بنزاهة وسرية كاملة."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
