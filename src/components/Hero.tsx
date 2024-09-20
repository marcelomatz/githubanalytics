"use client";

import { Search, Users, BarChart2, Zap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Search,
    title: "Busca Avançada",
    description: "Encontre projetos relevantes com facilidade e colabore.",
  },
  {
    icon: Users,
    title: "Colaboração",
    description:
      "Contribua para projetos open-source com a comunidade.",
  },
  {
    icon: Briefcase,
    title: "Empregos",
    description: "Tenha o seu perfil e projetos encontrados por recrutadores.",
  },
  {
    icon: Zap,
    title: "Integração",
    description:
      "Conecte-se com outras ferramentas para otimização",
  },
];

export default function Hero() {
  return (
    <div className="flex overflow-hidden pt-12">
      <div className="flex flex-col w-full mx-auto px-4">
        <div
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Descubra o GitHub Explorer
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
            Crie o seu perfil público, compartilhe os seus projetos e encontre um novo emprego na área de tecnologia.
          </p>
          <Button
            disabled
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg"
          >
            Crie a sua conta
          </Button>
          <span className="text-xs bg-pink-600 px-2 py-1 rounded-xl relative bottom-5 right-8 border-2 border-purple-800 ">
            Em breve
          </span>
        </div>
        <div className="w-full mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300"
              >
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
