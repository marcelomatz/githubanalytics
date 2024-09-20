import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

const techCompanies = [
  { name: "Google", logo: "https://github.com/google.png" },
  { name: "Microsoft", logo: "https://github.com/microsoft.png" },
  { name: "Facebook", logo: "https://github.com/facebook.png" },
  { name: "Netflix", logo: "https://github.com/netflix.png" },
  { name: "Apple", logo: "https://github.com/apple.png" },
  { name: "IBM", logo: "https://github.com/IBM.png" },
  { name: "Nvidia", logo: "https://github.com/nvidia.png" },
  { name: "Cisco", logo: "https://github.com/cisco.png" },
  { name: "Oracle", logo: "https://github.com/oracle.png" },
  { name: "Samsung", logo: "https://github.com/samsung.png" },
  { name: "BlueSky", logo: "https://github.com/bluesky-social.png" },
  { name: "Snapchat", logo: "https://github.com/snapchat.png" },
  { name: "Pinterest", logo: "https://github.com/pinterest.png" },
  { name: "Reddit", logo: "https://github.com/reddit.png" },
  { name: "GitHub", logo: "https://github.com/github.png" },
  { name: "GitLab", logo: "https://github.com/gitlab.png" },
  { name: "npm", logo: "https://github.com/npm.png" },
  { name: "Docker", logo: "https://github.com/docker.png" },
];

function CompanyGrid({ companies }: { companies: any[] }) {
  return (
    <div className="mb-4">
      <div className="grid grid-cols-3 lg:grid-cols-6 xl:grid-cols-9 gap-4">
        {companies.map((company) => (
          <Link href={`/${company.name}`}>
            <Card
              key={company.name}
              className="bg-primary text-primary-foreground border-0"
            >
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Avatar className="w-11 h-auto mb-2 items-center justify-center">
                  <AvatarImage
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="items-center justify-center"
                  />
                  <AvatarFallback>{company.name[0]}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg text-center">
                  {company.name}
                </h3>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Examples() {
  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto pt-10">
      <h2 className="text-background">Ou escolha uma das opções abaixo:</h2>
      <CompanyGrid companies={techCompanies} />
    </div>
  );
}
