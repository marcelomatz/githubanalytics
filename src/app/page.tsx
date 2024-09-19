"use client"

import { useState } from 'react'
import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sun, Moon, AlertCircle, Loader2 } from 'lucide-react'
import ProfileCard from '@/components/ProfileCard'
import RepositoryList from '@/components/RepositoryList'
import { UserProfile, Repository, CommitData } from '@/types'

export default function GitHubProfileAnalyzer() {
  const [username, setUsername] = useState('')
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [repos, setRepos] = useState<Repository[]>([])
  const [commitData, setCommitData] = useState<CommitData[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { theme, setTheme } = useTheme()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`)
      if (!userResponse.ok) {
        throw new Error(`O usuário ${username} não existe no Github!`)
      }
      const userData = await userResponse.json()
      setUserProfile(userData)
      
      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`)
      if (!reposResponse.ok) {
        throw new Error('Failed to fetch repositories')
      }
      const reposData = await reposResponse.json()
      setRepos(reposData)

      const today = new Date()
      const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate())
      const commitData = []
      for (let d = oneYearAgo; d <= today; d.setDate(d.getDate() + 1)) {
        commitData.push({
          day: d.toISOString().split('T')[0],
          value: Math.floor(Math.random() * 10)
        })
      }
      setCommitData(commitData)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-200">Analisador de Perfil GitHub</h1>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label={`Alternar para tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
        >
          {theme === 'dark' ? <Sun className="h-6 w-6 " /> : <Moon className="h-6 w-6" />}
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Nome de usuário do GitHub"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="flex-grow text-zinc-700 dark:text-zinc-400 border-zinc-400 outline-none"
            aria-label="Nome de usuário do GitHub"
          />
          <Button type="submit" disabled={loading}>
            {loading ? 
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Buscando...
              </> : 
              "Analisar Perfil"
            }
          </Button>
        </div>
      </form>

      {error && (
        <div className="text-rose-500 mb-4 flex items-center">
          <AlertCircle className="mr-2" />
          <span className='font-regular text-2xl'>{error}</span>
        </div>
      )}

      {userProfile && <ProfileCard userProfile={userProfile} />}

      {repos.length > 0 && (
        <>
          <RepositoryList repos={repos} />
        </>
      )}
    </div>
  )
}