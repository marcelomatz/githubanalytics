export default function Template({ children }: { children: React.ReactNode }) {
  const templateStyle = "flex flex-col w-full sm:px-4 max-w-7xl px-4 mx-auto py-4"
  return (
    <div className={templateStyle}>
      {children}
    </div>
  );
}