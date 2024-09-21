"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProfileCard from "@/components/ProfileCard";
import RepositoryList from "@/components/RepositoryList";
import { UserProfile, Repository } from "@/types";
import { fetchUserData } from "@/components/UserDataFetcher";

export default function UserPage({ params }: { params: { username: string } }) {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const isFromHome = searchParams.get("from") === "home";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchUserData(params.username);
        if (!response || !response.profile || !response.repositories) {
          throw new Error("Dados inválidos recebidos da API.");
        }
        const { profile, repositories } = response;
        setUserProfile(profile);
        setRepos(repositories);
        // Filtrar repositórios com base na linguagem selecionada
        if (selectedLanguage) {
          const filtered = repositories.filter(
            (repo) => repo.language === selectedLanguage
          );
          setFilteredRepos(filtered);
        } else {
          setFilteredRepos(repositories);
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.username, isFromHome, selectedLanguage]);

  if (loading) {
    return (
      <div className="sweet-loading">
        <Suspense fallback={<div>Carregando...</div>}>
          {userProfile && ( // Verifica se userProfile não é nulo
            <ProfileCard userProfile={userProfile} repositories={filteredRepos} />
          )}
        </Suspense>
      </div>
    );
  }

  if (error) return <div>Erro: {error}</div>;

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto mb-10 mt-10 p-4 xl:p-0">
      <h1 className="text-3xl font-bold mb-6 text-background">Perfil de {params.username}</h1>
      {userProfile && (
        <ProfileCard userProfile={userProfile} repositories={filteredRepos} />
      )}
      <div className="w-full mt-4 mb-4 flex justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-background">
            Linguagens de programação mais usadas por {params.username}:
          </h3>
          <div className="flex flex-wrap gap-2">
            {Array.from(new Set(repos.map((repo) => repo.language))).map(
              (language) => {
                const languageCount = repos.filter(
                  (repo) => repo.language === language
                ).length;
                const languageColor = `hsl(${Math.floor(
                  Math.random() * 360
                )}, 90%, 70%)`;
                return (
                  <span
                    key={language}
                    className="bg-gray-200 text-gray-900/90 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded cursor-pointer"
                    style={{ backgroundColor: languageColor }}
                    onClick={() => setSelectedLanguage(language || null)}
                  >
                    {language} ({languageCount})
                  </span>
                );
              }
            )}
          </div>
        </div>
      </div>
      {selectedLanguage && (
        <a
          href="#"
          className="px-4 py-2 bg-zinc-800 text-white rounded w-40 text-center mb-4"
          onClick={() => setSelectedLanguage(null)}
        >
          Limpar Filtros
        </a>
      )}
      <p className="pb-4 text-sm font-normal text-background">
        Total de repositórios: {filteredRepos.length}{" "}
        {selectedLanguage ? `filtrados por ${selectedLanguage}` : ""}
      </p>
      <RepositoryList repositories={filteredRepos} username={params.username} />{" "}
    </div>
  );
}
