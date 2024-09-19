"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Header({ onThemeChange }: { onThemeChange: () => void }) {
  const [username, setUsername] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username.trim()) {
      // Redirecionar para a página do usuário
      window.location.href = `/${username.trim()}?from=home`
    }
  }

  return (
    <header className="container mx-auto p-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold">Analisador de Perfil GitHub</h1>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="text"
          placeholder="Nome de usuário do GitHub"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="flex-grow"
          aria-label="Nome de usuário do GitHub"
        />
        <Button type="submit">Analisar Perfil</Button>
      </form>
      <div>
        <Button onClick={onThemeChange}>Trocar Tema</Button>
      </div>
    </header>
  )
}
