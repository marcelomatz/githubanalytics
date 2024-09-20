"use client"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Examples from '@/components/Examples'

export default function Home() {
  const [username, setUsername] = useState('')
  const router = useRouter()

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
          <Button type="submit" className="bg-zinc-900 text-zinc-200 hover:bg-zinc-700 dark:bg-zinc-800">
            Analisar Perfil
          </Button>
        </div>
      </form>
      <Examples />
    </div>
  )
}