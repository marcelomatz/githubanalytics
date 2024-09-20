import { Repository } from "@/types";
import { Card, CardHeader } from "@/components/ui/card";

interface RepositoryCardProps {
  repo: Repository;
}

const RepositoryCard: React.FC<RepositoryCardProps> = ({ repo }) => {
  return (
    <Card className="flex items-center justify-between mx-auto mb-16">
      <CardHeader className="justify-center">
        <h2 className="text-xl font-bold">{repo.name}</h2>
        <p className="text-gray-600">{repo.description}</p>
        <a href={repo.html_url} target="_blank" className="text-blue-500 hover:underline">
          Ver no GitHub
        </a>
      </CardHeader>
      <div className="flex flex-col mx-auto">
        <p><strong>Linguagem:</strong> {repo.language}</p>
        <p><strong>Estrelas:</strong> {repo.stargazers_count}</p>
        <p><strong>Forks:</strong> {repo.forks_count}</p>
      </div>
    </Card>
  );
};

export default RepositoryCard;