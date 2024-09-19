# Analisador de Perfil GitHub

## Descrição
Este aplicativo é um analisador de perfil do GitHub que permite aos usuários visualizar informações detalhadas sobre perfis do GitHub, incluindo dados do usuário, repositórios e um gráfico de commits.

## Funcionalidades
- Busca de perfis de usuário do GitHub
- Exibição de informações detalhadas do perfil do usuário
- Lista de repositórios do usuário
- Gráfico de calor de commits do último ano

## Tecnologias Utilizadas
- **Next.js**: Framework React para renderização do lado do servidor e geração de sites estáticos
- **React**: Biblioteca JavaScript para construção de interfaces de usuário
- **TypeScript**: Superset tipado de JavaScript
- **Tailwind CSS**: Framework CSS para design responsivo e customizável
- **React Calendar Heatmap**: Biblioteca para criação do gráfico de commits
- **React Tooltip**: Para adicionar tooltips interativos
- **API do GitHub**: Para buscar dados de usuários e repositórios

## Estrutura do Projeto
/
├── src/
│ ├── app/
│ │ └── page.tsx
│ ├── components/
│ │ ├── CommitGraph.tsx
│ │ ├── ProfileCard.tsx
│ │ └── RepositoryList.tsx
│ └── types.ts
├── public/
├── styles/
│ └── globals.css
├── package.json
└── tsconfig.json

## Configuração e Instalação
1. Clone o repositório
2. Instale as dependências:
   ```
   npm install
   ```
   ou
   ```
   yarn install
   ```
3. Crie um arquivo `.env.local` na raiz do projeto e adicione sua chave de API do GitHub:
   ```
   GITHUB_ACCESS_TOKEN=seu_token_aqui
   ```
4. Execute o servidor de desenvolvimento:
   ```
   npm run dev
   ```
   ou
   ```
   yarn dev
   ```

## Como Usar
1. Abra o aplicativo no navegador
2. Digite o nome de usuário do GitHub na barra de pesquisa
3. Pressione Enter ou clique no botão de busca
4. Visualize as informações do perfil, lista de repositórios e gráfico de commits

## Deploy
Este aplicativo pode ser facilmente implantado na Vercel:
1. Faça push do código para um repositório GitHub
2. Conecte o repositório à sua conta Vercel
3. A Vercel detectará automaticamente as configurações do Next.js e fará o deploy

Lembre-se de configurar as variáveis de ambiente necessárias no painel da Vercel antes do deploy.

## Contribuições
Contribuições são bem-vindas! Por favor, abra uma issue para discutir mudanças maiores antes de criar um pull request.

## Licença
[MIT](https://choosealicense.com/licenses/mit/)