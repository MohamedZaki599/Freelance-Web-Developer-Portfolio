import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "عيادة النور لطب وتجميل الأسنان في أسيوط",
  description:
    "عيادة أسنان في أسيوط تقدم خدمات تنظيف وتبييض وزراعة وتقويم الأسنان مع حجز سريع عبر واتساب."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
