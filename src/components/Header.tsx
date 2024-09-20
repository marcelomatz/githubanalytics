"use client"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from 'lucide-react'
import { Separator } from "./ui/separator";
import Link from "next/link";

interface HeaderProps {
  theme: 'light' | 'dark';
  setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

const Header: React.FC<HeaderProps> = ({ theme, setTheme }) => {
 
  return (
    <div className="w-full items-center justify-center">
      <div className="flex mb-6 justify-between w-full mx-auto pt-8 px-4 sm:px-16">
        <h1 className="text-2xl font-bold text-zinc-200 dark:text-zinc-900"><Link href={"/"}>GitHub Analytics</Link></h1>
        <Button
          variant="default"
          size="icon"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          aria-label={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
        >
          {theme === 'light' ? <Sun /> : <Moon />}
        </Button>
      </div>
      <Separator className="my-4 bg-zinc-900 dark:bg-zinc-200" />
    </div>
  )
}

export default Header