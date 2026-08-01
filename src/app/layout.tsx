import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pablo-lopez-next-portfolio.vercel.app"),
  title: "Pablo Lopez | Full Stack Developer",
  description:
    "Portfolio de Pablo Lopez, desarrollador Full Stack especializado en React, Next.js, Node.js, TypeScript, automatización e integración de inteligencia artificial.",
  keywords: [
    "Pablo Lopez",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Automatización",
    "Inteligencia Artificial",
  ],
  authors: [{ name: "Pablo Lopez" }],
  openGraph: {
    title: "Pablo Lopez | Full Stack Developer",
    description:
      "Desarrollo frontend, backend, automatización e integración de inteligencia artificial.",
    url: "https://pablo-lopez-next-portfolio.vercel.app",
    siteName: "Portfolio de Pablo Lopez",
    images: [{ url: "/mifoto.png", width: 420, height: 420 }],
    locale: "es_AR",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
