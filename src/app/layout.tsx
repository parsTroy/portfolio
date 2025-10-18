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
  title: "Troy Parsons - Software Engineer Portfolio",
  description: "Software Engineering Graduate Portfolio - Full-Stack Developer specializing in TypeScript, React, and C# .NET",
  authors: [{ name: "Troy Parsons" }],
  keywords: ["Troy Parsons", "Software Engineer", "Full-Stack Developer", "TypeScript", "React", "Next.js", "Portfolio"],
  openGraph: {
    title: "Troy Parsons - Software Engineer Portfolio",
    description: "Software Engineering Graduate Portfolio - Full-Stack Developer specializing in TypeScript, React, and C# .NET",
    type: "website",
    url: "https://troyparsons.ca",
    siteName: "Troy Parsons Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Troy Parsons - Software Engineer Portfolio",
    description: "Software Engineering Graduate Portfolio - Full-Stack Developer specializing in TypeScript, React, and C# .NET",
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
