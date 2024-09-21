export interface UserProfile {
  login: string
  avatar_url: string
  name: string | null
  bio: string | null
  company: string | null
  location: string | null
  blog: string | null
  followers: number
  following: number
  public_repos: number
  created_at: string
}

export interface Repository {
  id: number;
  name: string;
  description?: string;
  html_url: string;
  language?: string;
  owner: { // Adicionando a propriedade owner
    avatar_url: string;
    login: string;
  };
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  open_issues_count: number;
  topics: string[];
  created_at: string;
  pushed_at: string;
  size: number;
  default_branch: string;
  license: {
    name: string
  } | null
}

export interface CommitData {
  day: string
  value: number
}

export interface Repository {
  id: number; // ID do repositório
  name: string; // Nome do repositório
  // Adicione outros campos relevantes do repositório conforme necessário
}

export interface RepositoryListProps {
  repositories: Repository[]; // Array de repositórios
  username: string; // Nome de usuário do GitHub
}