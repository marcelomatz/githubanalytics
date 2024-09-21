import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background/95 dark:bg-foreground/95 text-primary-foreground mt-40 border-t border-y-0 border-purple-500/40">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          <Link href={"/"}>
          The Profile | <span className="font-bold">Dev</span>
          </Link>
        </h2>
            <p className="text-sm text-center md:text-left">
              Open-Source
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:underline">Início</Link></li>
              <li><Link href="/" className="text-sm hover:underline">Sobre</Link></li>
              <li><Link href="/" className="text-sm hover:underline">Contato</Link></li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <Link href="https://github.com/marcelomatz" className="hover:text-purple-500" target="_blank">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/matzmarcelo/" className="hover:text-purple-500" target="_blank">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} The Profile | Dev. Todos os direitos reservados.
          </p>
          <p className="text-sm mt-2">
            Desenvolvido por: <Link href="/marcelomatzx" className="hover:underline">Marcelo Matz</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}