import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VocalImage - Transform Your Professional Voice | Australia & NZ",
  description: "Australia and New Zealand's leading vocal coaching specialists. Transform your voice into your greatest professional asset with expert coaching for executives, presenters, and professionals.",
  keywords: ["vocal coaching", "presentation skills", "executive presence", "public speaking", "voice training", "Australia", "New Zealand", "professional development"],
  authors: [{ name: "VocalImage" }],
  openGraph: {
    title: "VocalImage - Transform Your Professional Voice",
    description: "Australia and New Zealand's leading vocal coaching specialists.",
    url: "https://vocalimage.com.au",
    siteName: "VocalImage",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
