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
    <div className="w-full justify-center py-8">
      <div className="flex w-full max-w-7xl px-4 lg:px-0 mx-auto justify-between">
        <h1 className="text-2xl font-bold"><Link href={"/"}>GitHub Explorer</Link></h1>
        <Button
          variant="default"
          size="icon"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          aria-label={`Alternar para tema ${theme === 'light' ? 'escuro' : 'claro'}`}
        >
          {theme === 'light' ? <Sun /> : <Moon />}
        </Button>
      </div>
      <Separator className="my-4 dark:bg-foreground" />
    </div>
  )
}

export default Header