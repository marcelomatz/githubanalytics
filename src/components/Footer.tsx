import { Github, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="flex w-full mx-auto items-center justify-center bg-primary text-primary-foreground mt-auto">
      <div className="flex flex-col w-full max-w-7xl mx-auto py-8 px-4 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold mb-4">GitHub Explorer</h2>
            <p className="text-sm text-center md:text-left">Explore repositórios do GitHub com facilidade e estilo.</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">Sobre</Link></li>
              <li><Link href="/contact" className="hover:underline">Contato</Link></li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Siga-nos</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/80">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/80">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/80">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} GitHub Explorer. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}