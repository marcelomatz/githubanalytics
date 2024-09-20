import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, GitFork, Code, Calendar, Eye, GitBranch, FileCode, Scale, MessageSquare, Grid, List, BarChart } from 'lucide-react'
import { Repository } from '@/types'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

interface RepositoryListProps {
  repos: Repository[]
}

export default function RepositoryList({ repos }: RepositoryListProps) {
  const [viewMode, setViewMode] = useState('grid')

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div className='flex flex-col'>
        <h2 className="text-2xl font-bold text-zinc-200 dark:text-zinc-900">Repositórios</h2>
          <span className='text-zinc-400 text-xs dark:text-zinc-600'>*Limite máximo de 100 repositórios</span>
        </div>
        <div className='text-zinc-200 dark:text-zinc-900'>
          <Select value={viewMode} onValueChange={setViewMode}>
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Selecione a visualização" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="grid">
                <div className="flex items-center">
                  <Grid className="mr-2 h-4 w-4" />
                  <span>Grid</span>
                </div>
              </SelectItem>
              <SelectItem value="list">
                <div className="flex items-center">
                  <List className="mr-2 h-4 w-4" />
                  <span>Lista</span>
                </div>
              </SelectItem>
              <SelectItem value="compact">
                <div className="flex items-center">
                  <BarChart className="mr-2 h-4 w-4" />
                  <span>Compacto</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {viewMode === 'grid' && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <Card key={repo.id} className="overflow-hidden shadow-xl shadow-zinc-900 dark:shadow-zinc-200">
              <CardHeader className="bg-primary text-zinc-200 dark:text-zinc-900">
                <CardTitle className="flex items-center justify-between">
                    <span className="truncate font-medium">{repo.name}</span>
                    <GitHubLogoIcon className="h-5 w-5" aria-label="Repositório Público" />
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
              <div className='flex flex-col text-sm font-medium p-4'>
                {repo.description || 'Sem descrição'}
              </div>
                <Tabs defaultValue="details">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="details">Detalhes</TabsTrigger>
                    <TabsTrigger value="stats">Estatísticas</TabsTrigger>
                    <TabsTrigger value="extra">Extra</TabsTrigger>
                  </TabsList>
                  <TabsContent value="details">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Code className="mr-2 h-4 w-4" />
                        <span>Linguagem: {repo.language || 'N/A'}</span>
                      </li>
                      <li className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>Criado em: {formatDate(repo.created_at)}</span>
                      </li>
                      <li className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>Último push: {formatDate(repo.pushed_at)}</span>
                      </li>
                      <li className="flex items-center">
                        <GitBranch className="mr-2 h-4 w-4" />
                        <span>Branch padrão: {repo.default_branch}</span>
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="stats">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Star className="mr-2 h-4 w-4" />
                        <span>Stars: {repo.stargazers_count}</span>
                      </li>
                      <li className="flex items-center">
                        <GitFork className="mr-2 h-4 w-4" />
                        <span>Forks: {repo.forks_count}</span>
                      </li>
                      <li className="flex items-center">
                        <Eye className="mr-2 h-4 w-4" />
                        <span>Watchers: {repo.watchers_count}</span>
                      </li>
                      <li className="flex items-center">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        <span>Issues abertas: {repo.open_issues_count}</span>
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="extra">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="description">
                        <AccordionTrigger>Descrição</AccordionTrigger>
                        <AccordionContent>
                          {repo.description || 'Sem descrição'}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="topics">
                        <AccordionTrigger>Tópicos</AccordionTrigger>
                        <AccordionContent>
                          {repo.topics && repo.topics.length > 0 ? (
                            <div className="flex flex-wrap gap-2">
                              {repo.topics.map((topic) => (
                                <Badge key={topic} variant="secondary">{topic}</Badge>
                              ))}
                            </div>
                          ) : (
                            'Nenhum tópico definido'
                          )}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="license">
                        <AccordionTrigger>Licença</AccordionTrigger>
                        <AccordionContent>
                          <div className="flex items-center">
                            <Scale className="mr-2 h-4 w-4" />
                            <span>{repo.license ? repo.license.name : 'Sem licença'}</span>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>
                </Tabs>
                <div className="mt-4 flex justify-between items-center">
                  <a 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-500 hover:underline flex items-center"
                  >
                    <FileCode className="mr-2 h-4 w-4" />
                    Ver no GitHub
                  </a>
                  <span className="text-sm text-muted-foreground">
                    Tamanho: {(repo.size / 1024).toFixed(2)} MB
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {viewMode === 'list' && (
        <div className="space-y-4">
          {repos.map((repo) => (
            <Card key={repo.id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{repo.name}</span>
                    <GitHubLogoIcon className="h-5 w-5" aria-label="Repositório Público" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">{repo.description || 'Sem descrição'}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="secondary">
                    <Code className="mr-1 h-4 w-4" />
                    {repo.language || 'N/A'}
                  </Badge>
                  <Badge variant="secondary">
                    <Star className="mr-1 h-4 w-4" />
                    {repo.stargazers_count}
                  </Badge>
                  <Badge variant="secondary">
                    <GitFork className="mr-1 h-4 w-4" />
                    {repo.forks_count}
                  </Badge>
                </div>
                <Tabs defaultValue="details">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="details">Detalhes</TabsTrigger>
                    <TabsTrigger value="stats">Estatísticas</TabsTrigger>
                    <TabsTrigger value="extra">Extra</TabsTrigger>
                  </TabsList>
                  <TabsContent value="details">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Code className="mr-2 h-4 w-4" />
                        <span>Linguagem: {repo.language || 'N/A'}</span>
                      </li>
                      <li className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>Criado em: {formatDate(repo.created_at)}</span>
                      </li>
                      <li className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>Último push: {formatDate(repo.pushed_at)}</span>
                      </li>
                      <li className="flex items-center">
                        <GitBranch className="mr-2 h-4 w-4" />
                        <span>Branch padrão: {repo.default_branch}</span>
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="stats">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Star className="mr-2 h-4 w-4" />
                        <span>Stars: {repo.stargazers_count}</span>
                      </li>
                      <li className="flex items-center">
                        <GitFork className="mr-2 h-4 w-4" />
                        <span>Forks: {repo.forks_count}</span>
                      </li>
                      <li className="flex items-center">
                        <Eye className="mr-2 h-4 w-4" />
                        <span>Watchers: {repo.watchers_count}</span>
                      </li>
                      <li className="flex items-center">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        <span>Issues abertas: {repo.open_issues_count}</span>
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="extra">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="description">
                        <AccordionTrigger>Descrição</AccordionTrigger>
                        <AccordionContent>
                          {repo.description || 'Sem descrição'}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="topics">
                        <AccordionTrigger>Tópicos</AccordionTrigger>
                        <AccordionContent>
                          {repo.topics && repo.topics.length > 0 ? (
                            <div className="flex flex-wrap gap-2">
                              {repo.topics.map((topic) => (
                                <Badge key={topic} variant="secondary">{topic}</Badge>
                              ))}
                            </div>
                          ) : (
                            'Nenhum tópico definido'
                          )}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="license">
                        <AccordionTrigger>Licença</AccordionTrigger>
                        <AccordionContent>
                          <div className="flex items-center">
                            <Scale className="mr-2 h-4 w-4" />
                            <span>{repo.license ? repo.license.name : 'Sem licença'}</span>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>
                </Tabs>
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-500 hover:underline flex items-center"
                >
                  <FileCode className="mr-2 h-4 w-4" />
                  Ver no GitHub
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {viewMode === 'compact' && (
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Nome</th>
              <th className="text-left p-2">Linguagem</th>
              <th className="text-left p-2">Stars</th>
              <th className="text-left p-2">Forks</th>
              <th className="text-left p-2">Último Push</th>
            </tr>
          </thead>
          <tbody>
            {repos.map((repo) => (
              <tr key={repo.id} className="border-b">
                <td className="p-2">
                  <a 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-500 hover:underline"
                  >
                    {repo.name}
                  </a>
                </td>
                <td className="p-2">{repo.language || 'N/A'}</td>
                <td className="p-2">{repo.stargazers_count}</td>
                <td className="p-2">{repo.forks_count}</td>
                <td className="p-2">{formatDate(repo.pushed_at)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}