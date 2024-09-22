import Link from "next/link";
import Template from "./Template";
import { headingTitle, headingSubTitle } from "../infos";

export default function Footer() {
  return (
    <Template>
      <footer className="flex flex-col mx-auto w-full justify-between text-center items-center">
        <h2 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          <Link href={"/"}>
            <span className="font-bold">{headingTitle}</span>
          </Link>
        </h2>
        <h3 className="text-xs text-white/90">{headingSubTitle}</h3>
        <p className="text-sm mt-3">
          &copy; {new Date().getFullYear()} {headingTitle} | Todos os direitos
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
