import type { Metadata } from "next";
import ThemeManager from "@/components/ThemeManager";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";

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
  title: "Analisador de Perfil do Github",
  description: "Veja o perfil e os principais repositórios dos usuários",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen items-center justify-center`}
      >
        <ThemeManager>
          {children}
          <Footer />
        </ThemeManager>
      </body>
    </html>
  );
}
