import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"

const techCompanies = [
  { name: "Google", logo: "https://github.com/google.png" },
  { name: "Microsoft", logo: "https://github.com/microsoft.png" },
  { name: "Facebook", logo: "https://github.com/facebook.png" },
  { name: "Netflix", logo: "https://github.com/netflix.png" },
]

const devCompanies = [
  { name: "GitHub", logo: "https://github.com/github.png" },
  { name: "GitLab", logo: "https://github.com/gitlab.png" },
  { name: "npm", logo: "https://github.com/npm.png" },
  { name: "Docker", logo: "https://github.com/docker.png" },
]

function CompanyGrid({ companies }: { companies: any[] }) {
  return (
    <div className="mb-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {companies.map((company) => (
          <Link href={`/${company.name}`}>
            <Card key={company.name} className="bg-zinc-800 text-white border-0 dark:bg-zinc-200 dark:text-zinc-900 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src={company.logo} alt={`${company.name} logo`} />
                  <AvatarFallback>{company.name[0]}</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-lg text-center">{company.name}</h3>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function Examples() {
  return (
    <div className="container mx-auto px-4 py-8">
      <CompanyGrid companies={techCompanies} />
      <CompanyGrid companies={devCompanies} />
    </div>
  )
}