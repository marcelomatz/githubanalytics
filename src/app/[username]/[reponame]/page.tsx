"use client";
import { useState, useEffect } from "react";
import { Repository } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Star,
  GitFork,
  Code,
  Calendar,
  Eye,
  GitBranch,
  MessageSquare,
  ArrowLeftFromLineIcon,
  Globe,
  Lock,
  Unlock,
  Archive,
  Download,
  BookOpen,
  FolderKanban,
  MessageCircleMore,
} from "lucide-react";
import Link from "next/link";
import LoadingSpinner from "../../../components/LoadingSpinner"; // Importando o LoadingSpinner
import { getRepoData } from "../../../components/actions/RepoDataFetcher"; // Importando o getRepoData

const RepositoryDetails: React.FC<{ repo: Repository }> = ({ repo }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            <h1 className="text-2xl font-bold">{repo.name}</h1>
          </CardTitle>
          <CardDescription>
            <h2 className="text-lg font-normal">{repo.description}</h2>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Detalhes</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-foreground" />
                  <span className="font-medium">
                    Linguagem: {repo.language || "N/A"}
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-foreground" />
                  <span className="font-medium">
                    Criado em: {formatDate(repo.created_at)}
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-foreground" />
                  <span className="font-medium">
                    Último push: {formatDate(repo.pushed_at)}
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <GitBranch className="h-5 w-5 text-foreground" />
                  <span className="font-medium">
                    Branch padrão: {repo.default_branch}
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-foreground" />
                  <span className="font-medium">
                    Homepage:{" "}
                    {repo.homepage ? (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        className="text-blue-500 hover:underline"
                      >
                        {repo.homepage}
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  {repo.visibility === "public" ? (
                    <Unlock className="h-5 w-5 text-foreground" />
                  ) : (
                    <Lock className="h-5 w-5 text-foreground" />
                  )}
                  <span className="font-medium">
                    Visibilidade: {repo.visibility}
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <Archive className="h-5 w-5 text-foreground" />
                  <span className="font-medium">
                    Arquivado: {repo.archived ? "Sim" : "Não"}
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <Download className="h-5 w-5 text-foreground" />
                  <span className="font-medium">
                    Downloads:{" "}
                    {repo.has_downloads ? "Habilitado" : "Desabilitado"}
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-foreground" />
                  <span className="font-medium">
                    Wiki: {repo.has_wiki ? "Habilitado" : "Desabilitado"}
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <FolderKanban className="h-5 w-5 text-foreground" />
                  <span className="font-medium">
                    Projetos:{" "}
                    {repo.has_projects ? "Habilitado" : "Desabilitado"}
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <MessageCircleMore className="h-5 w-5 text-foreground" />
                  <span className="font-medium">
                    Discussões:{" "}
                    {repo.has_discussions ? "Habilitado" : "Desabilitado"}
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Estatísticas</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-foreground">
                  <Star className="mr-2 h-4 w-4" />
                  <span className="font-medium">
                    Stars: {repo.stargazers_count}
                  </span>
                </li>
                <li className="flex items-center text-foreground">
                  <GitFork className="mr-2 h-4 w-4" />
                  <span className="font-medium">Forks: {repo.forks_count}</span>
                </li>
                <li className="flex items-center text-foreground">
                  <Eye className="mr-2 h-4 w-4" />
                  <span className="font-medium">
                    Watchers: {repo.watchers_count}
                  </span>
                </li>
                <li className="flex items-center text-foreground">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span className="font-medium">
                    Issues abertas: {repo.open_issues_count}
                  </span>
                </li>
                <li className="flex items-center text-foreground">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span className="font-medium">
                    Assinantes: {repo.subscribers_count}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Tópicos</h3>
            <div className="flex flex-wrap gap-2">
              {repo.topics.length > 0
                ? repo.topics.map((topic) => (
                    <span
                      key={topic}
                      className="bg-gray-200 text-gray-900/90 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded"
                    >
                      {topic}
                    </span>
                  ))
                : "Sem tópicos"}
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-sm text-muted-foreground">
              Tamanho: {(repo.size / 1024).toFixed(2)} MB
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
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
      <div className="sweet-loading">
        <LoadingSpinner /> {/* Usando o LoadingSpinner */}
      </div>
    );
  }

  if (error) return <div>Erro: {error}</div>;

  return (
    <div className="flex flex-col w-full items-center mx-auto p-4">
      <div className="w-full max-w-7xl">
        {repo && (
          <>
            <div className="flex space-x-4">
              <Link
                href={`/${repo.owner.login}`}
                className="flex items-baseline gap-2"
                key={repo.owner.login}
              >
                <ArrowLeftFromLineIcon />
                <h1 className="text-3xl font-bold mb-6">
                  Perfil de {repo.owner.login}
                </h1>
              </Link>
            </div>
            <RepositoryDetails repo={repo} />
          </>
        )}
      </div>
    </div>
  );
}
