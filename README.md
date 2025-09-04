<p align="center">
	<img src="src/assets/TMDB.svg" alt="Cine-Stats - TMDB" width="520" />
</p>

<p align="center">
	<a href="https://analise-de-midia.netlify.app" target="_blank" rel="noopener noreferrer">
		<img src="https://img.shields.io/badge/Live%20Demo-Netlify-00C7B7?style=for-the-badge&logo=netlify" alt="Live Demo" />
	</a>
  
</p>

# Cine-Stats

Descubra, pesquise e visualize dados de filmes usando a API do TMDB. Interface minimalista, responsiva e com foco em dados, incluindo gráfico de análise no detalhe do filme.

• Demo (executável): https://analise-de-midia.netlify.app/

## Principais features

- Listagem de filmes populares com paginação (até 500 páginas)
- Busca por título (estado via URL ?q=…); reseta paginação em novas buscas
- Detalhes do filme: pôster, título, sinopse, data, nota, gêneros e mais
- Gráfico (Recharts): comparação Popularidade x Votos
- Estados de loading/erro + skeleton loaders (grid e detalhes)
- Responsividade (Grid 2/3/4 colunas) e acessibilidade básica (focus visível, labels)

## Tecnologias utilizadas

- React 18 + Vite
- Axios (HTTP)
- React Router DOM (rotas)
- Recharts (gráficos)
- ESLint + Prettier + Husky + Commitlint + Commitizen + lint-staged (padrões e DX)
- Deploy: Netlify (SPA redirects)

## Como rodar o projeto (local)

1. Pré-requisitos: Node 18+
2. Crie o arquivo `.env.local` na raiz e informe sua chave (suporte a v4 ou v3):

```bash
# v4 (JWT longo, sem "Bearer ") OU v3 (chave curta)
VITE_TMDB_API_KEY=SEU_TOKEN_V4_OU_V3
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
VITE_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p
```

3. Instale dependências e rode em dev:

```bash
npm install
npm run dev
```

4. Build e preview de produção (opcional):

```bash
npm run build
npm run preview
```

## Rotas principais

- `/` Home (Populares e Busca com paginação `?page=…`)
- `/movie/:id` Detalhes + gráfico
- `*` NotFound

## Observações

- Não commitar `.env.local` (já ignorado).
- Em produção (Netlify), configure as mesmas variáveis VITE\_… no painel do site.

---

## Scripts úteis

- `npm run dev` – ambiente de desenvolvimento (Vite + HMR)
- `npm run build` – build de produção
- `npm run preview` – servir o build para teste local
- `npm run clean` – limpar a pasta `dist`
- `npm run lint` / `npm run lint:fix` – checagem e correção do lint
- `npm run format` / `npm run format:fix` – checagem e formatação Prettier
- `npm run commit` – commit guiado (Commitizen) no padrão Conventional Commits

## Estrutura do projeto

```
src/
	assets/           # ícones, imagens
	components/       # UI reutilizável (cards, busca, skeletons, etc.)
	hooks/            # hooks de dados (TMDB)
	pages/            # rotas (Home, Details, NotFound)
	services/         # cliente axios e integrações
```

## Padrões de código e commits

- ESLint + Prettier integrados (flat config) para padronização.
- Husky + lint-staged aplicam auto-fix em arquivos staged no pre-commit.
- Commitlint + Commitizen garantem Conventional Commits:
  - Ex.: `feat(home): listar filmes populares` | `fix(details): evitar crash sem poster`
  - Use `npm run commit` para o assistente interativo.

## Acessibilidade e UX

- Foco visível, labels e `aria-*` em busca e paginação.
- Skeleton loaders em grid e detalhes para melhor percepção de velocidade.
- Mensagens de erro amigáveis; estados de loading claros.

## Variáveis de ambiente e deploy

- Suporta TMDB v4 (JWT) via `Authorization: Bearer` ou v3 (api_key em query).
- Variáveis (Vite): `VITE_TMDB_API_KEY`, `VITE_TMDB_BASE_URL`, `VITE_TMDB_IMAGE_BASE_URL`.
- Reinicie o servidor dev após mudar `.env.local` (Vite lê envs no start).
- Netlify SPA: o arquivo `public/_redirects` já redireciona `/*` → `/index.html` (200).

## Limitações conhecidas

- Limite de paginação do TMDB: até 500 páginas.
- Rate limit da API do TMDB pode retornar 429 em uso intenso.
- Alguns filmes não têm pôster; exibimos um fallback visual.
- Conteúdo em `pt-BR` via parâmetro `language` nas requisições.
