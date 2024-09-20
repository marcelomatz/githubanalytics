"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProfileCard from "@/components/ProfileCard";
import RepositoryList from "@/components/RepositoryList";
import { UserProfile, Repository } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";

async function getUserData(username: string): Promise<UserProfile> {
  const res = await fetch(`https://api.github.com/users/${username}`);
  if (!res.ok) throw new Error("Falha ao buscar dados do usuário");
  return res.json();
}

  async function getUserRepos(username: string): Promise<Repository[]> {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
  );
  if (!res.ok) throw new Error("Falha ao buscar repositórios");
  return res.json();
}

export default function UserPage({ params }: { params: { username: string } }) {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const isFromHome = searchParams.get("from") === "home";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [profile, repositories] = await Promise.all([
          getUserData(params.username),
          getUserRepos(params.username),
        ]);
        setUserProfile(profile);
        setRepos(repositories);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.username, isFromHome]);

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <Skeleton className="h-12 w-3/4 mb-6" />
        <div className="space-y-4">
          {/* Skeleton para o ProfileCard */}
          <div className="mb-8">
            <Skeleton className="h-16 w-16 rounded-full mb-4" />
            <Skeleton className="h-8 w-64 mb-2" />
            <Skeleton className="h-4 w-48 mb-4" />
            <Skeleton className="h-4 w-full max-w-md mb-2" />
            <Skeleton className="h-4 w-32 mb-2" />
            <Skeleton className="h-4 w-40 mb-2" />
          </div>

          {/* Skeleton para o RepositoryList */}
          <div>
            <Skeleton className="h-58 w-48 mb-4" />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="rounded-xl p-4">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) return <div>Erro: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Perfil de {params.username}</h1>
      {userProfile && <ProfileCard userProfile={userProfile} />}
      {repos.length > 0 && <RepositoryList repos={repos} username={params.username} />}
    </div>
  );
}
