import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Star,
  GitFork,
  Code,
  Calendar,
  Eye,
  GitBranch,
  FileCode,
  Scale,
  MessageSquare,
  Grid,
  List,
  BarChart,
  Link2Icon,
} from "lucide-react";
import { Repository } from "@/types";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface RepositoryListProps {
  repos: Repository[];
  username: string;
}

export default function RepositoryList({
  repos,
  username,
}: RepositoryListProps) {
  const [viewMode, setViewMode] = useState("grid");

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-foreground dark:text-background">
            Repositórios
          </h2>
          <span className="text-xs text-primary-foreground">
            *Limite máximo de 100 repositórios
          </span>
        </div>
        <div className="text-primary-foreground">
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

            </SelectContent>
          </Select>
        </div>
      </div>

      {viewMode === "grid" && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <Card
              key={repo.id}
              className="overflow-hidden"
            >
              <CardHeader className="bg-primary text-primary-foreground">
                <CardTitle className="flex items-center justify-between">
                  <span className="truncate font-semibold">
                    <Link
                      href={`/${username}/${repo.name}`}
                      className="text-primary-foreground hover:underline flex items-center gap-2"
                    >
                      <Link2Icon />
                      {repo.name}
                    </Link>
                  </span>
                  <GitHubLogoIcon
                    className="h-5 w-5"
                    aria-label="Repositório Público"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex flex-col text-sm font-medium p-4">
                  {repo.description || "Sem descrição"}
                </div>
                <Tabs defaultValue="details">
                  <TabsList className="grid w-full grid-cols-3 text-foreground">
                    <TabsTrigger value="details">Detalhes</TabsTrigger>
                    <TabsTrigger value="stats">Estatísticas</TabsTrigger>
                    <TabsTrigger value="extra">Extra</TabsTrigger>
                  </TabsList>
                  <TabsContent value="details" className="p-2 text-sm">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Code className="mr-2 h-4 w-4" />
                        <span>Linguagem: {repo.language || "N/A"}</span>
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
                  <TabsContent value="stats" className="p-2 text-sm">
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
                  <TabsContent value="extra" className="p-2 text-sm">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="description">
                        <AccordionTrigger>Descrição</AccordionTrigger>
                        <AccordionContent>
                          {repo.description || "Sem descrição"}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="topics">
                        <AccordionTrigger>Tópicos</AccordionTrigger>
                        <AccordionContent>
                          {repo.topics && repo.topics.length > 0 ? (
                            <div className="flex flex-wrap gap-2">
                              {repo.topics.map((topic) => (
                                <Badge key={topic} variant="secondary">
                                  {topic}
                                </Badge>
                              ))}
                            </div>
                          ) : (
                            "Nenhum tópico definido"
                          )}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="license">
                        <AccordionTrigger>Licença</AccordionTrigger>
                        <AccordionContent>
                          <div className="flex items-center">
                            <Scale className="mr-2 h-4 w-4" />
                            <span>
                              {repo.license ? repo.license.name : "Sem licença"}
                            </span>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>
                </Tabs>
                <div className="mt-4 px-1 flex bottom-0 relative justify-between items-center">
                  <Link
                    href={`https://github.com/${username}/${repo.name}`}
                    className="text-blue-500 hover:underline flex items-center text-sm"
                    target="_blank"
                  >
                    <FileCode className="mr-2 h-4 w-4" />
                    Ver no GitHub
                  </Link>
                  <span className="text-sm text-muted-foreground">
                    Tamanho: {(repo.size / 1024).toFixed(2)} MB
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {viewMode === "list" && (
        <div className="space-y-4">
          {repos.map((repo) => (
            <Card key={repo.id} className="bg-foreground text-primary-foreground dark:bg-foreground">
              <CardHeader className="">
                <CardTitle className="flex items-center justify-between">
                  <span>
                    <Link
                      href={`/${username}/${repo.name}`}
                      className="text-blue-500 hover:underline"
                    >
                      {repo.name}
                    </Link>
                  </span>
                  <GitHubLogoIcon
                    className="h-5 w-5"
                    aria-label="Repositório Público"
                  />
                </CardTitle>
              </CardHeader>
              <CardContent className="py-4">
                <p className="mb-2">{repo.description || "Sem descrição"}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="secondary">
                    <Code className="mr-1 h-4 w-4" />
                    {repo.language || "N/A"}
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
                        <span>Linguagem: {repo.language || "N/A"}</span>
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
                          {repo.description || "Sem descrição"}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="topics">
                        <AccordionTrigger>Tópicos</AccordionTrigger>
                        <AccordionContent>
                          {repo.topics && repo.topics.length > 0 ? (
                            <div className="flex flex-wrap gap-2">
                              {repo.topics.map((topic) => (
                                <Badge key={topic} variant="secondary">
                                  {topic}
                                </Badge>
                              ))}
                            </div>
                          ) : (
                            "Nenhum tópico definido"
                          )}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="license">
                        <AccordionTrigger>Licença</AccordionTrigger>
                        <AccordionContent>
                          <div className="flex items-center">
                            <Scale className="mr-2 h-4 w-4" />
                            <span>
                              {repo.license ? repo.license.name : "Sem licença"}
                            </span>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>
                </Tabs>
                <div className="mt-4 flex justify-between items-center">
                <Link
                    href={`https://github.com/${username}/${repo.name}`}
                    className="text-blue-500 hover:underline flex items-center"
                    target="_blank"
                  >
                    <FileCode className="mr-2 h-4 w-4" />
                    Ver no GitHub
                  </Link>
                  <span className="text-sm text-muted-foreground">
                    Tamanho: {(repo.size / 1024).toFixed(2)} MB
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
