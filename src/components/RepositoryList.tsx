import { RepositoryListProps } from "@/types";
import { useState } from "react";
import { Card } from "./ui/card";
import Link from "next/link";
import { StarIcon, GitBranch, BadgeAlert, Code } from "lucide-react";

export default function RepositoryList({
  repositories,
  username,
}: RepositoryListProps) {
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Estado para a página atual
  const reposPerPage = 9; // Número de repositórios por página

  const filteredRepos = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      {viewMode === "grid" && (
        <div className="grid gap-6 w-full justify-between md:grid-cols-2 lg:grid-cols-3">
          {currentRepos.length > 0 ? (
            currentRepos.map((repo) => (
              <Card
                key={repo.id}
                className="overflow-hidden shadow-lg rounded-lg bg-zinc-100 w-full max-w-full p-4 flex flex-col"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={repo.owner.avatar_url}
                    alt="Avatar do proprietário"
                    className="w-14 h-14 rounded-full"
                  />
                  <div className="flex items-center gap-4">
                    <Link
                      href={`/${username}/${repo.name}`}
                      className="text-lg font-semibold hover:text-blue-500"
                    >
                      {repo.name.length > 20
                        ? `${repo.name.substring(0, 20)}...`
                        : repo.name}
                    </Link>
                  </div>
                </div>
                <span className="text-xl text-zinc-900 font-bold pl-1 pt-4">{repo.language}</span>
                <div className="mt-2 flex flex-col">
                  <p className="text-sm text-gray-600 pb-6 pl-1">
                    {repo.description ? `${repo.description.substring(0, 50)}...` : "Sem descrição."}
                  </p>
                  <div className="grid grid-cols-3 gap-2 items-center text-center">
                    <span className="flex flex-col py-1 px-4 items-center rounded text-xs font-medium bg-gray-200 text-gray-800">
                      <StarIcon className="w-4" /> {repo.stargazers_count}
                    </span>
                    <span className="flex flex-col py-1 px-4 items-center rounded text-xs font-medium bg-gray-200 text-gray-800">
                      <GitBranch className="w-4" /> {repo.forks_count}
                    </span>
                    <span className="flex flex-col py-1 px-4 items-center rounded text-xs font-medium bg-gray-200 text-gray-800">
                      <BadgeAlert className="w-4" /> {repo.open_issues_count}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between mt-6 items-center">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-zinc-900 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
                  >
                    Ver no GitHub
                  </a>
                  <span className="text-xs text-gray-500">
                    Tamanho: {(repo.size / 1024).toFixed(2)} MB
                  </span>
                </div>
              </Card>
            ))
          ) : (
            <p>Nenhum repositório encontrado.</p> // Mensagem se não houver repositórios
          )}
        </div>
      )}

      {/* Controles de Paginação */}
      <div className="flex justify-between mt-4 items-center">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-transparent/90 text-white rounded-xl"
        >
          Anterior
        </button>
        <span className="text-xs sm:text-lg items-center">
          Mostrando de {indexOfFirstRepo + 1} até {indexOfLastRepo} de um total
          de {filteredRepos.length}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-transparent/90 text-white rounded-xl"
        >
          Próxima
        </button>
      </div>
    </>
  );
}
