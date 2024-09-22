
import Examples from "@/components/Examples";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import UserSearchForm from "@/components/UserSearchForm";

export default function Home() {
  return (
    <>
      <div className="flex flex-col bg-zinc-900 max-w-7xl mx-auto px-4 xl:px-0">
        <div className="sticky top-0 bg-zinc-900 z-20 w-full py-10">
          <UserSearchForm />
        </div>
      <Hero />
      <Features />
      <Examples />
      </div>
    </>
  );
}
