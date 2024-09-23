import Template from "./Template";
import {
  ctaPrincipal,
  ctaSecondary,
  ctaLinkHref,
  ctaLinkTitle,
} from "../../data/HomePage/Hero";
import Link from "next/link";

export default function Hero() {
  return (
    <Template>
      <div className="text-center space-y-12 mt-10">
        <h1 className="text-4xl pb-4 md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          {ctaPrincipal}
        </h1>
        <p className="text-lg sm:text-xl pb-10 md:text-2xl max-w-3xl mx-auto text-gray-300">
          {ctaSecondary}
        </p>
        <Link
          href={ctaLinkHref}
          className="bg-purple-600/50 ml-12 cursor-default text-white font-bold py-3 px-8 rounded-full text-lg"
        >
          {ctaLinkTitle}
        </Link>
        <span className="text-sm text-zinc-100 bg-pink-700 px-3 py-2 rounded-xl relative bottom-5 right-8 border-2 border-purple-700 font-normal">
          Em breve
        </span>
      </div>
    </Template>
  );
}
