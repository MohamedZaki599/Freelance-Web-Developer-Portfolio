import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "دار العود - عطور فاخرة وعود أصلي",
  description:
    "دار العود براند عطور فاخر يقدم عودًا ومسكًا وعنبرًا للسوق السعودي والخليجي بتجربة عربية وإنجليزية."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
