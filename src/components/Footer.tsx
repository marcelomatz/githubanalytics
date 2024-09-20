import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 w-full items-center justify-center">
      <div className="flex mb-6 justify-between w-full mx-auto pt-8 px-4 sm:px-16">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Desenvolvido por{" "}
            <Link
              href="/marcelomatz"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Marcelo Matz
            </Link>
          </p>
        </div>
        <Link
          href="https://github.com/marcelomatz/githubanalytics"
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-2"
        >
          <div className="flex gap-4 text-sm items-center justify-center">
            <p>O código do projeto está disponível no GitHub</p>
            <GitHubLogoIcon className="h-6 w-6 " />
          </div>
          <span className="sr-only">Repositório no GitHub</span>
        </Link>
      </div>
    </footer>
  );
}
