import Link from "next/link";
import { appTitle, appSubTitle } from "../../data/index";

export default function HeaderTitle() {
  return (
  <span className="flex-col">
    <h1 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
      <Link href={"/"}>
        <span className="font-bold">{appTitle}</span>
      </Link>
    </h1>
    <h2 className="text-xs text-white/80">{appSubTitle}</h2>
  </span>
  )
}
