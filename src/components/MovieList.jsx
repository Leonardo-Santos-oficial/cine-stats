import MovieCard from './MovieCard'

export default function MovieList({ movies }) {
  if (!movies?.length) return <p style={{color:'var(--muted)'}}>Nenhum filme encontrado.</p>
  return (
    <div className="grid" role="list" aria-label="Lista de filmes">
      {movies.map((m) => (
        <div role="listitem" key={m.id}>
          <MovieCard movie={m} />
        </div>
      ))}
    </div>
  )
}
