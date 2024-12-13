import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "TruBooker",
  description: "",
};

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={manrope.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
