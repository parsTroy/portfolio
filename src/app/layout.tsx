import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const courierPrime = Courier_Prime({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-terminal",
});

export const metadata: Metadata = {
  title: "Terminal Portfolio - Software Engineer",
  description: "Software Engineering Graduate Portfolio - 90s Hacker Aesthetic",
  authors: [{ name: "Troy Parsons" }],
  openGraph: {
    title: "Terminal Portfolio - Software Engineer",
    description: "Software Engineering Graduate Portfolio - 90s Hacker Aesthetic",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${courierPrime.variable} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
