import { UserProfile, Repository } from "@/types";

async function getUserData(username: string): Promise<UserProfile> {
  const res = await fetch(`https://api.github.com/users/${username}`, {
    cache: "default",
  });
  if (!res.ok) {
    throw new Error("Falha ao buscar dados do usuário");
  }
  return res.json();
}

async function getUserRepos(username: string): Promise<Repository[]> {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
    {
      cache: "default",
    }
  );
  if (!res.ok) {
    throw new Error("Falha ao buscar repositórios");
  }
  return res.json();
}

export async function fetchUserData(username: string) {
  const [profile, repositories] = await Promise.all([
    getUserData(username),
    getUserRepos(username),
  ]);
  console.log("Profile:", profile);
  console.log("Repositories:", repositories);
  return { profile, repositories };
}
