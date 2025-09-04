import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { usePopularMovies, useSearchMovies } from '../hooks/useMovies'
import Spinner from '../components/Spinner'
import ErrorMessage from '../components/ErrorMessage'
import MovieList from '../components/MovieList'
import Pagination from '../components/Pagination'

export default function HomePage() {
  const [params, setParams] = useSearchParams()
  const q = params.get('q') || ''
  const page = Number(params.get('page') || '1')

  const { data: popData, loading: popLoading, error: popError } = usePopularMovies(!q ? page : 1)
  const { data: searchData, loading: searchLoading, error: searchError } = useSearchMovies(q, page)

  const { results, total_pages } = useMemo(() => {
    const src = q ? searchData : popData
    return { results: src?.results ?? [], total_pages: src?.total_pages ?? 1 }
  }, [q, popData, searchData])

  const loading = q ? searchLoading : popLoading
  const error = q ? searchError : popError

  const handlePage = (p) => {
    const next = new URLSearchParams(params)
    next.set('page', String(p))
    setParams(next)
  }

  return (
    <section aria-labelledby="heading">
      <h1 id="heading" style={{margin:'1rem 0'}}>Filmes {q ? `– Busca por “${q}”` : 'Populares'}</h1>
      {loading && <Spinner label="Carregando filmes" />}
      {error && <ErrorMessage message="Não foi possível carregar os filmes. Tente novamente." />}
      {!loading && !error && <MovieList movies={results} />}
      {!loading && !error && total_pages > 1 && (
        <Pagination page={page} totalPages={Math.min(total_pages, 500)} onPageChange={handlePage} />
      )}
    </section>
  )
}
