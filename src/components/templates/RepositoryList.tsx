import { RepositoryListProps } from "@/types";
import { useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { StarIcon, GitBranch, BadgeAlert, Code } from "lucide-react";
import PaginationComponent from "../actions/PaginationComponent";
import Image from "next/image";

export default function RepositoryList({
  repositories,
  username,
}: RepositoryListProps) {
  const [currentPage, setCurrentPage] = useState(1); // Estado para a página atual
  const reposPerPage = 9; // Número de repositórios por página

  const filteredRepos = repositories.filter((repo) => repo.name);

  // Calcular os repositórios a serem exibidos na página atual
  const totalPages = Math.ceil(filteredRepos.length / reposPerPage); // Total de páginas
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = filteredRepos.slice(indexOfFirstRepo, indexOfLastRepo);

  // Verificação para evitar acesso a índices inválidos
  if (currentPage < 1) setCurrentPage(1);
  if (currentPage > totalPages) setCurrentPage(totalPages);

  return (
    <>
      <div className="grid gap-6 w-full justify-center md:grid-cols-2 lg:grid-cols-3">
        {currentRepos.length > 0 ? (
          currentRepos.map((repo) => (
            <Card
              key={repo.id}
              className="p-4 flex flex-col bg-gradient-to-br from-zinc-800 to-zinc-700 text-white text-center"
            >
              <Link
                href={`/${username}/${repo.name}`}
                className="text-lg font-semibold"
              >
                <CardTitle className="flex flex-col gap-4 items-center py-4">
                  <Image
                    src={repo.owner.avatar_url}
                    alt="Avatar do proprietário"
                    width={66}
                    height={66}
                    className="rounded-full bg-white p-2"
                  />
                  <span className="text-lg uppercase">
                    {repo.name.length > 20
                      ? `${repo.name.substring(0, 20)}...`
                      : repo.name}
                  </span>
                </CardTitle>
                <span className="text-sm pl-1 pt-4">
                  {repo.language}
                </span>
                <CardDescription className="mt-2 flex flex-col">
                  <p className="text-sm font-normal pb-6 pl-1">
                    {repo.description
                      ? `${repo.description}`
                      : "Sem descrição."}
                  </p>
                  <div className="grid grid-cols-3 gap-2 items-center text-center">
                    <span className="flex flex-col py-1 px-4 items-center rounded text-xs font-medium bg-foreground">
                      <StarIcon className="w-4" /> {repo.stargazers_count}
                    </span>
                    <span className="flex flex-col py-1 px-4 items-center rounded text-xs font-medium bg-foreground">
                      <GitBranch className="w-4" /> {repo.forks_count}
                    </span>
                    <span className="flex flex-col py-1 px-4 items-center rounded text-xs font-medium bg-foreground">
                      <BadgeAlert className="w-4" /> {repo.open_issues_count}
                    </span>
                  </div>
                </CardDescription>
              </Link>
              <div className="flex justify-between mt-6 items-center">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex bg-zinc-800 hover:bg-muted hover:text-zinc-800 items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm focus:outline-none"
                >
                  Ver no GitHub
                </a>
                <span className="text-xs text-foreground font-semibold">
                  {(repo.size / 1024).toFixed(2)} MB
                </span>
              </div>
            </Card>
          ))
        ) : (
          <p>Nenhum repositório encontrado.</p>
        )}
      </div>
      <div className="mt-10 cursor-pointer">
        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
}
