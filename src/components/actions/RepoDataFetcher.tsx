import { Repository } from "@/types";

export async function getRepoData(
  username: string,
  reponame: string
): Promise<Repository> {
  const res = await fetch(
    `https://api.github.com/repos/${username}/${reponame}`
  );
  if (!res.ok) throw new Error("Falha ao buscar dados do repositório");
  return res.json();
}
