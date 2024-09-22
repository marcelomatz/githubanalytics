import Examples from "../components/templateComponents/Examples";
import Hero from "../components/templateComponents/Hero";
import Features from "../components/templateComponents//Features";
import UserSearchForm from "@/components/UserSearchForm";

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
