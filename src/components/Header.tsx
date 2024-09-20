import { Separator } from "./ui/separator";
import Link from "next/link";

const Header = () => {
 
  return (
    <div className="w-full justify-center bg-zinc-900 bg-background dark:bg-foreground py-8">
      <div className="flex w-full max-w-7xl px-4 lg:px-0 mx-auto justify-between">
        <h1 className="text-2xl font-bold"><Link href={"/"}>GitHub Explorer</Link></h1>
      
      </div>
      <Separator className="my-4 dark:bg-foreground" />
    </div>
  )
}

export default Header