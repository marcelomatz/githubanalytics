# TheGitHub

## Descrição

TheGitHub é um analisador de perfis do GitHub que permite aos usuários visualizar informações detalhadas sobre perfis, incluindo dados de usuário, repositórios e estatísticas visuais de commits e contribuições.

## Funcionalidades

- Pesquisa de perfis de usuário no GitHub
- Exibição detalhada de informações do perfil (bio, seguidores, seguindo, etc.)
- Lista de repositórios com detalhes como linguagem, forks e stars
- Gráfico de estatísticas de commits e contribuições por repositório
- Filtro por ano e tipo de repositório

## Tecnologias Utilizadas

- **Next.js**: Framework para renderização no servidor
- **React**: Biblioteca para interfaces de usuário
- **TypeScript**: Superset de JavaScript para tipagem estática
- **Tailwind CSS**: Estilização rápida e responsiva
- **React Tooltip**: Tooltips interativos
- **API do GitHub**: Busca de dados de perfis e repositórios

## Configuração e Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/marcelomatz/githubanalytics

   ```

2. Instale as dependências

   ```bash
   pnpm install
   ```

3. Crie o arquivo .env.local e adicione sua chave de API do GitHub (Este recurso não está 100% implementado)

```bash
GITHUB_ACCESS_TOKEN=seu_token_aqui
```

4. Execute o servidor de desenvolvimento

```bash
pnpm run dev
```

## Como Usar

- Abra o aplicativo em seu navegador.
- Digite o nome de usuário do GitHub que deseja analisar na barra de pesquisa.
- Pressione Enter ou clique em "Buscar" para visualizar as informações do perfil.

## Contribuições

Contribuições são bem-vindas! Abra uma issue para discutir mudanças antes de criar um pull request.

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
