"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Examples from "@/components/Examples";

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
    <div className="flex flex-col max-w-7xl mx-auto px-4 xl:px-0">
      <form onSubmit={handleSubmit} className="">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Nome de usuário do GitHub"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="flex-grow"
            aria-label="Nome de usuário do GitHub"
          />
          <Button type="submit" variant="secondary">
            Analisar Perfil
          </Button>
        </div>
      </form>
      <Examples />
    </div>
  );
}
