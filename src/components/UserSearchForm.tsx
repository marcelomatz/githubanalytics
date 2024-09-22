"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const UserSearchForm = () => {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      router.push(`/${username.trim()}`);
    }
  };

  return (
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
  );
};

export default UserSearchForm;