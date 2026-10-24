import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
   metadataBase: new URL("https://www.trubooker.com"),
   title: {
    default: "TruBooker Book Bus & Shared Rides Between Cities and Towns in Nigeria",
    template: "%s | TruBooker",
  },
  description:"Book trusted buses and shared rides between cities, towns and rural areas. Compare prices, see pickup points, and track your trip live on the TruBooker app.",
  keywords: [
    "bus booking Nigeria", "interstate bus ticket", "book bus online Nigeria",
    "ride sharing Nigeria", "rural transport", "intercity travel app",
  ],
  alternates: { canonical: "/" },
    openGraph: {
    type: "website",
    url: "/",
    siteName: "TruBooker",
    title: "TruBooker – Travel Between Cities and Towns, Simply",
    description: "Compare buses, book seats and track your trip live.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "TruBooker app" }],
    locale: "en_NG",
  },
   twitter: {
    card: "summary_large_image",
    site: "@TruBookerApp",
    images: ["/trub.png"],
  },
  itunes: { appId: "6743930941" },
  robots: { index: true, follow: true },
  icons: "/logo.svg",
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
        <Analytics />
      </body>
    </html>
  );
}