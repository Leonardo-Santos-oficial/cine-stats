# PRD - Projeto Dashboard de Mídia (Cine-Stats)

## 1. Visão Geral do Projeto

- **Nome do Projeto:** Cine-Stats Dashboard.
- **Declaração do Produto:** Uma aplicação web responsiva e interativa que consome a API do The Movie Database (TMDB) para permitir que usuários descubram, pesquisem e vejam informações detalhadas sobre filmes.
- **Público-Alvo:** Recrutadores e Tech Leads, demonstrando competência na integração com APIs, gerenciamento de estado assíncrono e desenvolvimento de UI/UX focado em dados.
- **Objetivo Principal:** Provar a habilidade do desenvolvedor em construir uma aplicação front-end baseada em dados, gerenciando estados de carregamento (loading) e erro, e estruturando uma navegação coesa entre múltiplas telas (páginas).

## 2. Tecnologias Propostas

- **Linguagens:** HTML5, CSS3, JavaScript (ES6+).
- **Biblioteca Principal:** React 18+ (Hooks).
- **Requisições HTTP:** **Axios** (uma biblioteca robusta e popular para fazer chamadas de API).
- **Roteamento:** **React Router DOM** (para criar a navegação entre a página principal e a página de detalhes).
- **Visualização de Dados (Diferencial):** **Recharts** ou **Chart.js**.
- **Setup do Projeto:** Vite.
- **Controle de Versão:** Git e GitHub.
- **Deploy:** Vercel ou Netlify.

## 3. Arquitetura de Componentes

A aplicação será dividida em "páginas" (componentes de rota) e componentes reutilizáveis.

- **Componentes de Página:**
  - `HomePage.js`: A página principal que exibe a lista de filmes populares ou os resultados da busca.
  - `DetailsPage.js`: A página que exibe todas as informações de um filme específico, acessada ao clicar em um card.
- **Componentes Reutilizáveis:**
  - `Header.js`: Contém o logo, o campo de busca e talvez a navegação principal.
  - `MovieList.js`: Componente responsável por receber um array de filmes e renderizar uma lista de `MovieCard`.
  - `MovieCard.js`: Um card para exibir a imagem (pôster), título e a nota de um filme. É um link que levará para a `DetailsPage`.
  - `SearchBar.js`: O componente de input de busca com sua lógica.
  - `Spinner.js`: Um componente de feedback visual para o estado de `loading`.
  - `ErrorMessage.js`: Um componente para exibir mensagens de erro de forma amigável.
  - `Pagination.js`: Componente para navegar entre as páginas de resultados.

## 4. Princípios de Código e Arquitetura

Mantemos os mesmos princípios de alta qualidade do projeto anterior.

- **Modularização e Single Responsibility:** Componentes devem ser pequenos e focados. A lógica de chamada da API será encapsulada em um custom hook (ex: `useFetchMovies`) ou em um módulo de serviço (`/src/services/api.js`) para não poluir os componentes de UI.
- **JavaScript e React Modernos (ES6+ e Hooks):** Uso exclusivo de `async/await` para lidar com a assincronicidade, desestruturação para manipular os dados da API, e Hooks (`useState`, `useEffect`, `useParams` do React Router) para todo o gerenciamento de estado e ciclo de vida.
- **Segurança de Chaves de API:** A chave da API do TMDB **nunca** deve ser exposta no código. Ela será armazenada em um arquivo `.env` local e acessada via variáveis de ambiente (ex: `import.meta.env.VITE_API_KEY` no Vite), que será ignorado pelo Git através do `.gitignore`.

## 5. API (Fonte de Dados)

- **Provedor:** [The Movie Database (TMDB)](https://www.themoviedb.org/documentation/api)
- **Endpoints Principais a serem usados:**
  - `/movie/popular`: Para buscar os filmes mais populares (tela inicial).
  - `/search/movie`: Para buscar filmes com base no input do usuário.
  - `/movie/{movie_id}`: Para obter os detalhes completos de um filme específico.
- **Ação Necessária:** Criar uma conta no site do TMDB e solicitar uma chave de API gratuita.

## 6. Detalhamento das Funcionalidades (User Stories)

- **Listagem de Filmes Populares:**
  - Ao carregar a `HomePage`, a aplicação deve buscar e exibir a primeira página de filmes mais populares do TMDB.
  - Enquanto os dados são buscados, um componente `Spinner` deve ser exibido.
  - Se ocorrer um erro na busca, uma `ErrorMessage` deve ser mostrada.
- **Busca de Filmes:**
  - O usuário pode digitar no `SearchBar` e submeter uma busca.
  - A aplicação deve usar o endpoint de busca para exibir os resultados.
  - A interface deve ser atualizada para mostrar os resultados da busca em vez dos filmes populares.
- **Paginação:**
  - Abaixo da lista de filmes, deve haver um controle de paginação.
  - Clicar em "próxima página" ou em um número de página deve buscar e exibir os resultados correspondentes.
- **Visualização de Detalhes:**
  - Clicar em qualquer `MovieCard` deve navegar o usuário para a `DetailsPage` (ex: `/movie/550`).
  - A `DetailsPage` deve usar o ID da URL para buscar os detalhes completos daquele filme.
  - A página deve exibir informações detalhadas como pôster, título, sinopse, data de lançamento, nota média, gêneros, etc.
- **(Diferencial) Gráfico de Análise:**
  - Na `DetailsPage`, exibir um gráfico de barras simples usando Recharts.
  - O gráfico pode comparar a "Popularidade" do filme vs. a "Contagem de Votos", por exemplo, para dar um contexto visual aos dados.

## 7. Estilização e UI/UX

- **Design:** Limpo, moderno e focado nos dados. A interface não deve competir com o conteúdo (os pôsteres e informações dos filmes).
- **Responsividade:** O layout deve ser fluido e se adaptar perfeitamente a telas de desktop, tablet e mobile. O grid de filmes pode mudar de 4 colunas para 2 ou 1, dependendo da largura da tela.
- **Feedback ao Usuário:** Além do spinner e mensagens de erro, a UI deve dar feedback claro, como desabilitar o botão de busca enquanto uma requisição está em andamento.

## 8. Orientações para Usar a IA como Assistente

> **Exemplos de Prompts:**
>
> - **Setup:** "Como eu configuro o React Router DOM v6 em um projeto Vite para ter uma `HomePage` e uma `DetailsPage` com rota dinâmica (`/movie/:id`)?"
> - **API:** "Me mostre um exemplo de como fazer uma requisição GET para a API do TMDB usando axios em um `useEffect`, passando a API key no cabeçalho ou como parâmetro."
> - **Estado:** "Qual a melhor forma de gerenciar os estados de `loading` e `error` ao buscar dados de uma API em um componente React?"
> - **Roteamento:** "No meu componente `DetailsPage`, como eu pego o `id` do filme da URL usando o hook `useParams` do React Router?"
> - **Gráficos:** "Me dê um exemplo de código básico para criar um gráfico de barras com a biblioteca Recharts em React, usando dados mockados."

## 9. Próximos Passos (Plano de Ação)

1.  **Acesso à API:** Ir ao site do TMDB, criar a conta e gerar sua chave de API.
2.  **Setup do Projeto:** Criar o projeto Vite, instalar `axios` e `react-router-dom`, e configurar o arquivo `.env.local` com sua chave de API.
3.  **Estrutura de Rotas:** Configurar as rotas principais (`/` e `/movie/:id`) no `App.js`.
4.  **Primeira Feature:** Focar em implementar a busca e exibição dos filmes populares na `HomePage`, incluindo os estados de loading e erro.
