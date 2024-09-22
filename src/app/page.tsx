import Examples from "@/components/Examples";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import UserSearchForm from "@/components/UserSearchForm";
import Template from "@/components/Template";

export default function Home() {
  return (
    <>
      <UserSearchForm />
      <Hero />
      <Features />
      <Examples />
    </>
  );
}
