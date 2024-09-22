"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const UserSearchForm = () => {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username) {
      router.push(`/${username.trim()}`);
      setUsername('');
    }
  };

  return (
    <div className="flex flex-col text-white">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Usuário do GitHub"
            value={username.trim()}
            onChange={(e) => setUsername(e.target.value)}
            required
            aria-label="Nome de usuário do GitHub"
            className="text-xs text-white"
          />
          <Button type="submit" variant="secondary">
            Explorar Perfil
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserSearchForm;
