"use client"
import Header from "@/components/Header"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  const [username, setUsername] = useState('')
  const router = useRouter()
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username.trim()) {
      router.push(`/${username.trim()}`)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Nome de usuário do GitHub"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="flex-grow"
            aria-label="Nome de usuário do GitHub"
          />
          <Button type="submit">
            Analisar Perfil
          </Button>
        </div>
      </form>
    </div>
  )
}