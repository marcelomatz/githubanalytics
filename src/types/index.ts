export interface UserProfile {
  login: string;
  avatar_url: string;
  name: string | null;
  bio: string | null;
  company: string | null;
  location: string | null;
  blog: string | null;
  followers: number;
  following: number;
  public_repos: number;
  created_at: string;
}

export interface Repository {
  id: number;
  name: string;
  description?: string;
  html_url: string;
  language?: string;
  owner: {
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
    name: string;
  } | null;
  homepage?: string;
  visibility: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  archived: boolean;
  disabled: boolean;
  open_issues: number;
  subscribers_count: number;
}

export interface CommitData {
  day: string;
  value: number;
}

export interface RepositoryListProps {
  repositories: Repository[];
  username: string;
}

export interface Language {
  name: string;
  count: number;
  color: string;
}

export interface IssueDetailsProps {
  issues: RepositoryListProps;
}

export interface RepositoryIssue {
  id: number;
  number: number;
  title: string;
  body: string;
  state: "open" | "closed";
  user: {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
  };
  labels: Array<{
    id: number;
    name: string;
    color: string;
  }>;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at: string | null;
  html_url: string;
}
