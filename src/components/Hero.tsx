import { Button } from "@/components/ui/button";
import Template from "./Template";

export default function Hero() {
  return (
    <Template>
      <div className="text-center space-y-8 my-8">
        <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          The Profile | Dev
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
          Crie o seu perfil público, compartilhe os seus projetos e encontre um
          novo emprego na área de tecnologia.
        </p>
        <Button
          disabled
          size="lg"
          className="bg-purple-600 ml-12 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg"
        >
          Crie a sua conta
        </Button>
        <span className="text-xs bg-pink-600 px-2 py-1 rounded-xl relative bottom-5 right-8 border-2 border-purple-800 shadow-lg shadow-purple-600">
          Em breve
        </span>
      </div>
    </Template>
  );
}
