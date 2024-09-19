export interface UserProfile {
  login: string
  avatar_url: string
  name: string | null
  bio: string | null
  company: string | null
  location: string | null
  blog: string | null
  followers: number
  following: number
  public_repos: number
  created_at: string
}

export interface Repository {
  id: number
  name: string
  private: boolean
  html_url: string
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  watchers_count: number
  open_issues_count: number
  topics: string[]
  created_at: string
  pushed_at: string
  size: number
  default_branch: string
  license: {
    name: string
  } | null
}

export interface CommitData {
  day: string
  value: number
}