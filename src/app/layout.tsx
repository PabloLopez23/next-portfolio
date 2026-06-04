import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pablo-lopez-next-portfolio.vercel.app"),
  title: "Pablo Lopez | Cybersecurity Analyst",
  description:
    "Portfolio of Pablo Lopez, a Cybersecurity Analyst focused on Blue Team, cloud security, and secure software development.",
  keywords: [
    "Pablo Lopez",
    "Cybersecurity Analyst",
    "Blue Team",
    "Cloud Security",
    "Secure Software Development",
    "React",
    "Next.js",
    "TypeScript",
    "Linux",
  ],
  authors: [{ name: "Pablo Lopez" }],
  openGraph: {
    title: "Pablo Lopez | Cybersecurity Analyst",
    description:
      "Blue Team, cloud security, and secure software development portfolio.",
    url: "https://pablo-lopez-next-portfolio.vercel.app",
    siteName: "Pablo Lopez Portfolio",
    images: [{ url: "/mifoto.png", width: 420, height: 420 }],
    locale: "en_US",
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
    <html lang="en" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
