import type { Metadata } from "next";
import "./globals.css";
import { Nunito, Nunito_Sans } from 'next/font/google';

const fontSans = Nunito_Sans({ subsets: ['latin'], variable: '--font-sans' });
const fontTitle = Nunito({ subsets: ['latin'], variable: '--font-title' });


export const metadata: Metadata = {
  title: "ResumeCraft",
  description: "Gerador de currículo para trabalhos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${fontSans.variable} ${fontTitle.variable} antialiased min-h-screen bg-background font-sans`}
      >

        {children}
      </body>
    </html>
  );
}
