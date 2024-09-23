import { Repository, RepositoryIssue } from "@/types";

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

export async function getRepoIssues(
  username: string,
  reponame: string,
  page: number = 1,
  perPage: number = 10
): Promise<RepositoryIssue[]> {
  // Corrigido para RepositoryIssue[]
  const res = await fetch(
    `https://api.github.com/repos/${username}/${reponame}/issues?page=${page}&per_page=${perPage}`
  );
  if (!res.ok) throw new Error("Falha ao buscar issues do repositório");
  return res.json();
}
