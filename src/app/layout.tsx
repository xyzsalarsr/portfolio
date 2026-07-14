import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/assets/css/globals.css";
import { ThemeProvider } from "@/components/old/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://salarsr.com"),
  title: "Salar Rismantab",
  description:
    "Full stack developer building fast, clean, well-crafted products — currently working on Landix.",
  openGraph: {
    title: "Salar Rismantab",
    url: "https://salarsr.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="width-full antialiased dark">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="mx-auto max-w-175 px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
