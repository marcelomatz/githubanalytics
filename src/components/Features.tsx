import Template from "./Template";

const features = [
  {
    icon: "🔍",
    title: "Busca Avançada",
    description:
      "Encontre projetos relevantes com facilidade, utilizando filtros e palavras-chave para refinar sua pesquisa.",
  },
  {
    icon: "🤝",
    title: "Colaboração",
    description:
      "Contribua para projetos open-source, interaja com outros desenvolvedores e aprenda com a comunidade.",
  },
  {
    icon: "📦",
    title: "Análise de Dados",
    description:
      "Visualize estatísticas de repositórios e desenvolvedores, ajudando você a entender tendências e padrões.",
  },
  {
    icon: "🚀",
    title: "Integração",
    description:
      "Conecte-se com outras ferramentas e serviços, otimizando seu fluxo de trabalho e aumentando sua produtividade.",
  },
  {
    icon: "👥",
    title: "Empregos",
    description: "Tenha o seu perfil e projetos encontrados por recrutadores.",
  },
  {
    icon: "🚧",
    title: "Desenvolvimento",
    description:
      "Aprenda novas habilidades e tecnologias, melhorando sua carreira como desenvolvedor.",
  },
  {
    icon: "🚫",
    title: "Segurança",
    description:
      "Aprenda a identificar e corrigir vulnerabilidades em seu código, garantindo a segurança de seus projetos.",
  },
  {
    icon: "🚀",
    title: "Inovação",
    description:
      "Explore as últimas tecnologias e tendências, mantendo-se atualizado com as inovações mais recentes.",
  },
];

export default function Features() {
  return (
    <Template>
      <span className="mb-20">
        <h2 className="text-2xl sm:text-4xl text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Conectando pessoas à oportunidades
        </h2>
      </span>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <section
            key={index}
            className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300"
          >
            <div className="w-12 h-12 text-purple-400 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-background">
              {feature.title}
            </h3>
            <p className="text-gray-400">{feature.description}</p>
          </section>
        ))}
      </section>
    </Template>
  );
}
