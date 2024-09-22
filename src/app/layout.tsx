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
  title: "The Profile | Dev",
  description:
    "Crie o seu perfil público, compartilhe os seus projetos e encontre um novo emprego na área de tecnologia.",
  openGraph: {
    title: "The Profile | Dev",
    description:
      "Crie o seu perfil público, compartilhe os seus projetos e encontre um novo emprego na área de tecnologia.",
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
