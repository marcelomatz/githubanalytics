import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/templates/Header";
import Footer from "../components/templates/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "The-GitHub | Comunidade Open-source",
  description:
    "Mostre suas habilidades, descubra oportunidades incríveis de emprego e junte-se a uma comunidade open-source que impulsiona sua trajetória profissional.",
  openGraph: {
    title: "The-GitHub | Comunidade Open-source",
    description:
      "Mostre suas habilidades, descubra oportunidades incríveis de emprego e junte-se a uma comunidade open-source que impulsiona sua trajetória profissional.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-900`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
