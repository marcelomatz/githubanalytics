import Link from "next/link";

export default function Footer() {
  return (
    <>
    <div className="relative">
    <footer className="flex absolute top-32 bottom-0 w-full mx-auto items-center justify-center dark:bg-foreground/95 bg-background/95 text-primary-foreground mt-auto">
      <div className="flex flex-col px-4 pb-2 pt-2 w-full justify-center mx-auto">
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-md font-bold">GitHub Explorer</h2>
          <p className="text-xs text-center">
            Explore repositórios do GitHub com facilidade e estilo. &copy;{" "}
            {new Date().getFullYear()}.
          </p>
          <p className="text-xs text-center">GitHub Explorer. Todos os direitos
          reservados | Desenvolvido por: <Link href={`/marcelomatzx`}>Marcelo Matz</Link></p>
        </div>
      </div>
    </footer>
    </div>
    </>
  );
}
