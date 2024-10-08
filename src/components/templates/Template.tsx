export default function Template({ children }: { children: React.ReactNode }) {
  const templateStyle =
    "flex flex-col w-full max-w-7xl px-4 mx-auto py-4";
  return <section className={templateStyle}>{children}</section>;
}
