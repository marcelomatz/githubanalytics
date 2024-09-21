"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProfileCard from "@/components/ProfileCard";
import RepositoryList from "@/components/RepositoryList";
import { UserProfile, Repository } from "@/types";
import { fetchUserData } from "@/components/UserDataFetcher";
import ClipLoader from "react-spinners/ClipLoader";

export default function UserPage({ params }: { params: { username: string } }) {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  let [color, setColor] = useState("#ffffff");

  const searchParams = useSearchParams();
  const isFromHome = searchParams.get("from") === "home";
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "purple",
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setColor("#c084fc")
      setError(null);
      try {
        const { profile, repositories } = await fetchUserData(params.username);
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
      <div className="sweet-loading">

      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
    );
  }

  if (error) return <div>Erro: {error}</div>;

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto mb-10 p-4 xl:p-0">
      <h1 className="text-3xl font-bold mb-6">Perfil de {params.username}</h1>
      {userProfile && <ProfileCard userProfile={userProfile} />}
      {repos.length > 0 && (
        <RepositoryList repos={repos} username={params.username} />
      )}
    </div>
  );
}
