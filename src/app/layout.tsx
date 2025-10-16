import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sello Marsello",
  description: "Personal portfolio site",
   icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
