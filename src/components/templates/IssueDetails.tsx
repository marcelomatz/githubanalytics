"use client";

import React from "react";
import { RepositoryIssue } from "@/types";
import Link from "next/link";

interface IssueDetailsProps {
  issues: RepositoryIssue[];
}

const IssueDetails: React.FC<IssueDetailsProps> = ({ issues }) => {
  if (issues.length === 0) {
    return <p>Nenhuma issue encontrada.</p>;
  }

  return (
    <div>
      {issues.map((issue) => (
        <div key={issue.id} className="mb-4 p-4 border rounded-md">
          <Link
            href={issue.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <h2 className="text-xl font-semibold">{issue.title}</h2>
          </Link>
          {issue.state === "closed" ? (
            <p className="text-sm text-rose-500">Status: {issue.state}</p>
          ) : (
            <p className="text-sm text-green-500">Status: {issue.state}</p>
          )}
          <div className="grid grid-cols-2 text-gray-200">
            <p className="text-sm">
              Usuário:
              <Link href={issue.user.html_url}> {issue.user.login}</Link>
            </p>
            <p className="text-sm p-2">
              {issue.labels.map((label) => label.name).join(", ")}
            </p>
            <p className="text-sm font-bold">
              URL da issue:{" "}
              <span className="text-gray-200 font-normal hover:underline">
                {" "}
                <Link href={issue.html_url}>{issue.html_url}</Link>
              </span>
            </p>
            <p className="text-sm">Atualizada em: {issue.updated_at}</p>
            <p className="text-sm">
              Status:{" "}
              {issue.state === "closed"
                ? `Fechada em: ${issue.closed_at}`
                : "Aberta"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IssueDetails;
