import type { Metadata } from "next";
import { Poppins, Dancing_Script } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const dancingScript = Dancing_Script({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Brand Image - A Complete Gateway for Beauty, Health, Business & Women Empowerment",
  description:
    "Knowledge | Experts | Trusted Products | Healthier Women | Brighter Tomorrow - Brand Image Beauty & Wellness Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${dancingScript.variable}`}>
      <body className="min-h-screen bg-white text-slate-800 antialiased selection:bg-pink-100 selection:text-pink-600">
        {children}
      </body>
    </html>
  );
}
