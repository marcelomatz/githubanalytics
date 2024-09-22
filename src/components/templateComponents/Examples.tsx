import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";
import Template from "./Template";
import { techCompanies, examplesTitle } from "@/data/Examples";

function CompanyGrid({ companies }: { companies: any[] }) {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-6 xl:grid-cols-9">
      {companies.map((company) => (
        <Link href={`/${company.name}`} key={company.name}>
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="flex flex-col items-center justify-center">
              <Avatar className="w-11 h-auto mb-2 items-center justify-center">
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={40}
                  height={40}
                  quality={100}
                  className="rounded-full"
                  loading="lazy"
                />
              </Avatar>
              <h3 className="text-center">
                {company.name}
              </h3>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default function Examples() {
  return (
    <Template>
      <div className="mt-8">
        <h2 className="text-background text-sm sm:text-xl text-center">
          {examplesTitle}
        </h2>
        <div className="mt-16">
          <CompanyGrid companies={techCompanies} />
        </div>
      </div>
    </Template>
  );
}
