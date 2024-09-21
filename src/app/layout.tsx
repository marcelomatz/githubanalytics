import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";



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
  description: "Crie o seu perfil público, compartilhe os seus projetos e encontre um novo emprego na área de tecnologia.",
  openGraph: {
    title: 'The Profile | Dev',
    description: 'Somos uma comunidade Open-Source focada em conectar pessoas à oportunidades no mercado de desenvolvimento.',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased items-center justify-center bg-zinc-900`}
      >
        <Header />
        {children}
        <Footer />
        
      </body>
    </html>
  );
}
