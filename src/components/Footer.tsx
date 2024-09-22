import Link from "next/link";
import { Linkedin, Github } from "lucide-react";
import Template from "./Template";

export default function Footer() {
  return (
    <Template>
      <footer className="flex flex-col mx-auto w-full justify-between text-center items-center">
        <h2 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          <Link href={"/"}>
            The Profile | <span className="font-bold">Dev</span>
          </Link>
        </h2>
        <p className="text-sm">Open-Source</p>
        <p className="text-sm mt-3">
          &copy; {new Date().getFullYear()} The Profile | Dev. Todos os direitos
          reservados.
        </p>
        <p className="text-sm mt-2">
          Desenvolvido por:{" "}
          <Link href="/marcelomatzx" className="hover:underline">
            Marcelo Matz
          </Link>
        </p>
      </footer>
    </Template>
  );
}
