
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="flex overflow-hidden pt-12">
      <div className="flex flex-col w-full mx-auto px-4">
        <div
          className="text-center mb-16 "
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            The Profile | Dev
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300">
            Crie o seu perfil público, compartilhe os seus projetos e encontre um novo emprego na área de tecnologia.
          </p>
          <Button
            disabled
            size="lg"
            className="bg-purple-600 ml-12 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg"
          >
            Crie a sua conta
          </Button>
          <span className="text-xs bg-pink-600 px-2 py-1 rounded-xl relative bottom-5 right-8 border-2 border-purple-800 ">
            Em breve
          </span>
        </div>
        
      </div>
    </div>
  );
}
