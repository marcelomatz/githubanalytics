"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Examples from "@/components/Examples";
import Hero from "@/components/Hero";
import Features from "@/components/Features";

export default function Home() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      router.push(`/${username.trim()}`);
    }
  };

  return (
    <>
      <div className="flex flex-col bg-zinc-900 max-w-7xl mx-auto px-4 xl:px-0">
        <div className="sticky top-0 bg-zinc-900 z-20 w-full py-10">
          <form onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <Input
                type="text"
                placeholder="Nome de usuário do GitHub"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="flex-grow text-white"
                aria-label="Nome de usuário do GitHub"
              />
              <Button type="submit" variant="secondary">
                Explorar Perfil
              </Button>
            </div>
          </form>
        </div>
      <Examples />
      <Hero />
      <Features />
      </div>
    </>
  );
}
