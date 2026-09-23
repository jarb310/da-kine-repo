import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shadic B",
  description: "Shadic B, a junior at UH Manoa studying SLS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
