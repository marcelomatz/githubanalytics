import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, MapPin, LinkIcon, GitFork, Calendar, Code } from 'lucide-react'
import { UserProfile, Repository } from '@/types'

interface ProfileCardProps {
  userProfile: UserProfile
  repositories: Repository[]
}

export default function ProfileCard({ userProfile, repositories }: ProfileCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <Card className="mb-8 bg-zinc-100 dark:bg-zinc-900">
      <CardHeader>
        <CardTitle className="flex items-center gap-4">
          <Avatar className="h-16 w-16 bg-background dark:bg-foreground">
            <AvatarImage src={userProfile.avatar_url} alt={userProfile.name || userProfile.login} />
            <AvatarFallback>{userProfile.login.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold">{userProfile.name || userProfile.login}</h2>
            <p className="text-muted-foreground">@{userProfile.login}</p>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            {userProfile.bio && <p className="mb-2">{userProfile.bio}</p>}
            {userProfile.company && (
              <p className="flex items-center gap-2">
                <Users className="h-4 w-4 text-blue-500" />
                {userProfile.company}
              </p>
            )}
            {userProfile.location && (
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-500" />
                {userProfile.location}
              </p>
            )}
            {userProfile.blog && (
              <p className="flex items-center gap-2">
                <LinkIcon className="h-4 w-4 text-blue-500" />
                <a href={userProfile.blog} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {userProfile.blog}
                </a>
              </p>
            )}
          </div>
          <div>
            <p className="flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-500" />
              {userProfile.followers} seguidores · {userProfile.following} seguindo
            </p>
            <p className="flex items-center gap-2">
              <GitFork className="h-4 w-4 text-blue-500" />
              {userProfile.public_repos} repositórios públicos
            </p>
            <p className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-blue-500" />
              Membro desde {formatDate(userProfile.created_at)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}