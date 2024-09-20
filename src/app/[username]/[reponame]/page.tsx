"use client";

import { useState, useEffect } from "react";
import { Repository } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import RepositoryCard from "@/components/RepositoryCard";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Star,
  GitFork,
  Code,
  Calendar,
  Eye,
  GitBranch,
  MessageSquare,
  ArrowLeftFromLineIcon,
} from "lucide-react";
import Link from "next/link";

async function getRepoData(
  username: string,
  reponame: string
): Promise<Repository> {
  const res = await fetch(
    `https://api.github.com/repos/${username}/${reponame}`
  );
  if (!res.ok) throw new Error("Falha ao buscar dados do repositório");
  return res.json();
}

const RepositoryDetails: React.FC<{ repo: Repository }> = ({ repo }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-col text-md font-medium p-4">
          <p className="text-xs text-zinc-600">Descrição do repositório:</p>
          {repo.description || "Sem descrição"}
        </div>
        <Tabs defaultValue="details">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="details">Detalhes</TabsTrigger>
            <TabsTrigger value="stats">Estatísticas</TabsTrigger>
            <TabsTrigger value="extra">Extra</TabsTrigger>
          </TabsList>
          <TabsContent value="details">
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <Code className="h-5 w-5 text-blue-500" />
                <span className="font-medium">
                  Linguagem: {repo.language || "N/A"}
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-blue-500" />
                <span className="font-medium">
                  Criado em: {formatDate(repo.created_at)}
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-blue-500" />
                <span className="font-medium">
                  Último push: {formatDate(repo.pushed_at)}
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <GitBranch className="h-5 w-5 text-blue-500" />
                <span className="font-medium">
                  Branch padrão: {repo.default_branch}
                </span>
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
            </Accordion>
          </TabsContent>
        </Tabs>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-muted-foreground">
            Tamanho: {(repo.size / 1024).toFixed(2)} MB
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default function RepoPage({
  params,
}: {
  params: { username: string; reponame: string };
}) {
  const [repo, setRepo] = useState<Repository | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const repository = await getRepoData(params.username, params.reponame);
        setRepo(repository);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.username, params.reponame]);

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <Skeleton className="h-12 w-3/4 mb-6" />
      </div>
    );
  }

  if (error) return <div>Erro: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      {error && <div className="text-red-500">Erro: {error}</div>}
      {repo && (
        <>
          <div className="flex items-baseline space-x-4">
            <ArrowLeftFromLineIcon />
            <h1 className="text-3xl font-bold mb-6">
              <Link href={`/${params.username}`}>
                Perfil de {params.username}
              </Link>
            </h1>
          </div>
            <RepositoryCard repo={repo} />
            <RepositoryDetails repo={repo} />
        </>
      )}
    </div>
  );
}