"use client";

import { useState, useEffect, useReducer, Suspense } from "react";
import ProfileCard from "../../components/templates/ProfileCard";
import RepositoryList from "../../components/templates/RepositoryList";
import { Repository } from "@/types";
import { fetchUserData } from "../../components/actions/UserDataFetcher";
import LoadingSpinner from "../../components/LoadingSpinner";
import { Language } from "@/types";

const useUserData = (username: string, selectedLanguage: string | null) => {
  const [state, dispatch] = useReducer(
    (state: any, action: any) => {
      switch (action.type) {
        case "FETCH_INIT":
          return { ...state, loading: true, error: null };
        case "FETCH_SUCCESS":
          return {
            ...state,
            loading: false,
            userProfile: action.payload.profile,
            repos: action.payload.repositories,
            filteredRepos: action.payload.repositories,
          };
        case "FETCH_FAILURE":
          return { ...state, loading: false, error: action.payload };
        case "SET_FILTERED_REPOS":
          return { ...state, filteredRepos: action.payload };
        default:
          return state;
      }
    },
    {
      userProfile: null,
      repos: [],
      filteredRepos: [],
      loading: true,
      error: null,
    }
  );

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const response = await fetchUserData(username);
        if (!response || !response.profile || !response.repositories) {
          throw new Error("Dados inválidos recebidos da API.");
        }
        dispatch({ type: "FETCH_SUCCESS", payload: response });
      } catch (err) {
        dispatch({ type: "FETCH_FAILURE", payload: (err as Error).message });
      }
    };

    fetchData();
  }, [username]);

  useEffect(() => {
    if (selectedLanguage) {
      const filtered = state.repos.filter(
        (repo: Repository) => repo.language === selectedLanguage
      );
      dispatch({ type: "SET_FILTERED_REPOS", payload: filtered });
    } else {
      dispatch({ type: "SET_FILTERED_REPOS", payload: state.repos });
    }
  }, [selectedLanguage, state.repos]);

  return state;
};

export default function UserPage({ params }: { params: { username: string } }) {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const { userProfile, repos, filteredRepos, loading, error } = useUserData(
    params.username,
    selectedLanguage
  );

  console.log("Loading:", loading);
  console.log("Error:", error);
  console.log("UserProfile:", userProfile);
  console.log("Repos:", repos);

  if (loading) {
    return (
      <div className="sweet-loading">
        <LoadingSpinner /> {/* Usando o LoadingSpinner */}
      </div>
    );
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  const getLanguages = (repos: Repository[]): Language[] => {
    const languagesMap: { [key: string]: number } = {};
    repos.forEach((repo) => {
      if (repo.language) {
        languagesMap[repo.language] = (languagesMap[repo.language] || 0) + 1;
      }
    });

    return Object.keys(languagesMap).map((language) => ({
      name: language,
      count: languagesMap[language],
      color: `hsl(${Math.floor(Math.random() * 360)}, 40%, 60%)`,
    }));
  };

  const languages = getLanguages(repos);

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto mb-10 mt-10 p-4 xl:p-0">
      <h1 className="text-3xl font-bold mb-6 text-background">
        Perfil de {params.username}
      </h1>
      <Suspense fallback={<LoadingSpinner />}>
        {userProfile && (
          <ProfileCard userProfile={userProfile} repositories={filteredRepos} />
        )}
      </Suspense>
      <div className="w-full mt-4 mb-4 flex justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-2 text-background">
            Linguagens de programação mais usadas por {params.username}:
          </h3>
          <div className="flex flex-wrap gap-2">
            {languages.map((language, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-900/90 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded cursor-pointer"
                style={{ backgroundColor: language.color }}
                onClick={() => setSelectedLanguage(language.name)}
              >
                {language.name} ({language.count})
              </span>
            ))}
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
      <Suspense fallback={<LoadingSpinner />}>
        <RepositoryList
          repositories={filteredRepos}
          username={params.username}
        />
      </Suspense>
    </div>
  );
}
