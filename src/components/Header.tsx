"use client"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from 'lucide-react'
import { Separator } from "./ui/separator";
import { useEffect } from 'react';
import Link from "next/link";

interface HeaderProps {
  theme: 'light' | 'dark';
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

const Header: React.FC<HeaderProps> = ({ theme, setTheme }) => {
  // Use useEffect para aplicar o tema ao body
  useEffect(() => {
    document.body.className = theme; // Aplica a classe do tema ao body
  }, [theme]);

  return (
    <div className="w-full items-center justify-center">
      <div className="flex mb-6 justify-between w-full mx-auto pt-8 px-4 sm:px-16">
        <h1 className="text-3xl font-bold text-zinc-200 dark:text-zinc-900"><Link href={"/"}>GitHub Analytics</Link></h1>

        <Button
          variant="default"
          size="icon"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          aria-label={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
        >
          {theme === 'light' ? <Moon /> : <Sun />}
        </Button>
      </div>
      <Separator className="my-4" />
    </div>
  )
}

export default Header