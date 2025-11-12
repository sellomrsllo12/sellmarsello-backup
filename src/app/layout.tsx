import "./globals.css";
import type { Metadata } from "next";
import { Satisfy } from 'next/font/google'

export const metadata: Metadata = {
  title: "Sello Marsello",
  description: "Personal portfolio site",
   icons: {icon: "/favicon-new.ico"},
};

const satisfy = Satisfy({
  subsets: ['latin'],
  weight: '400',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${satisfy.className} bg-gray-900 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
