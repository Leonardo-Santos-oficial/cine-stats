# Cine-Stats Dashboard

App React (Vite) que consome a API do TMDB para listar filmes populares, buscar por título e exibir detalhes com um gráfico simples.

## Tecnologias
- React 18 (Vite)
- Axios
- React Router DOM
- Recharts

## Configuração
1. Crie um arquivo `.env.local` com sua chave da TMDB (Bearer Token):

```
VITE_TMDB_API_KEY=SEU_TOKEN_AQUI
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p
```

2. Instale dependências e rode em dev:

```
npm install
npm run dev
```

## Rotas
- `/` Lista filmes populares e busca (query param `q`) com paginação.
- `/movie/:id` Detalhes do filme + gráfico (Recharts).

## Deploy
- Vercel/Netlify. Certifique-se de configurar as mesmas variáveis de ambiente do `.env.local`.# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
