"use client";

import { useState, useEffect } from "react";
import { getRepoIssues } from "../../../../components/actions/RepoDataFetcher";

export default function IssuesPage({
  params,
}: {
  params: { username: string; reponame: string };
}) {
  const [page, setPage] = useState(1);
  const perPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const issuesData = await getRepoIssues(
          params.username,
          params.reponame,
          page,
          perPage
        );
        console.log(issuesData);
      } catch (err) {
      } finally {
      }
    };

    fetchData();
  }, [params.username, params.reponame, page]);
}
