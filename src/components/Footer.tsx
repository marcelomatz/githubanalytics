import { Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex w-full mx-auto items-center justify-center bg-primary text-primary-foreground mt-auto">
      <div className="flex flex-col w-full max-w-7xl justify-center mx-auto py-8">
        <div className="flex flex-col px-4 gap-2 items-center">
          <h2 className="text-xl font-bold">GitHub Explorer</h2>
          <p className="text-xs text-center">
            Explore repositórios do GitHub com facilidade e estilo. &copy;{" "}
            {new Date().getFullYear()}
          </p>
          <p className="text-xs">GitHub Explorer. Todos os direitos
          reservados.</p>
        </div>

        <div className="py-2 border-primary-foreground/10 text-center">
          <p className="text-xs py-2">
            Nome, marca e logotipo do GitHub são propriedades exclusivas da
            GitHub, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
