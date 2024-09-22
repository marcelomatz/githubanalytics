import Template from "../templateComponents/Template";
import {ctaPrincipal, ctaSecondary, ctaLinkHref, ctaLinkTitle} from "../../data/HomePage/Hero"
import Link from "next/link";

export default function Hero() {
  return (
    <Template>
      <div className="text-center space-y-8 my-8">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          {ctaPrincipal}
        </h1>
        <p className="text-xl pb-10 md:text-2xl max-w-3xl mx-auto text-gray-300">
          {ctaSecondary}
        </p>
        <Link
          href={ctaLinkHref}
          className="bg-purple-600/50 ml-12 cursor-default text-white/50 font-bold py-3 px-8 rounded-full text-lg"
        >
          {ctaLinkTitle}
        </Link>
        <span className="text-sm bg-pink-600 px-2 py-1 rounded-xl relative bottom-5 right-8 border-2 border-purple-800 shadow-lg shadow-purple-600">
          Em breve
        </span>
      </div>
    </Template>
  );
}