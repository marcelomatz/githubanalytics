"use client";

import { useState, useEffect } from "react";
import { getRepoIssues } from "@/components/actions/RepoDataFetcher";
import LoadingSpinner from "@/components/templates/LoadingSpinner";
import IssueDetails from "@/components/templates/IssueDetails";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

export default function IssuesPage({
  params,
}: {
  params: { username: string; reponame: string };
}) {
  const [issues, setIssues] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const issuesData = await getRepoIssues(
          params.username,
          params.reponame,
          page,
          perPage
        );
        setIssues(issuesData);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.username, params.reponame, page]);

  if (loading) {
    return (
      <div className="sweet-loading">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto mb-10 mt-10 p-4 xl:p-0">
      <h1 className="text-3xl font-bold mb-6 text-background">
        Issues de {params.reponame}
      </h1>
      <IssueDetails issues={issues} />
      <Pagination className="mt-4">
        <PaginationContent>
          <PaginationPrevious onClick={() => handlePageChange(page - 1)} />
          <PaginationItem>
            <PaginationLink isActive>{page}</PaginationLink>
          </PaginationItem>
          <PaginationNext onClick={() => handlePageChange(page + 1)} />
        </PaginationContent>
      </Pagination>
    </div>
  );
}
