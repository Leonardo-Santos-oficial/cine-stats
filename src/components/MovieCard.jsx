import { Link } from 'react-router-dom'

const imgBase = import.meta.env.VITE_TMDB_IMAGE_BASE_URL || 'https://image.tmdb.org/t/p'

export default function MovieCard({ movie }) {
  const poster = movie.poster_path ? `${imgBase}/w342${movie.poster_path}` : ''
  const date = movie.release_date ? new Date(movie.release_date).getFullYear() : '—'

  return (
    <Link to={`/movie/${movie.id}`} className="card" aria-label={`${movie.title} detalhes`}>
      {poster ? (
        <img className="poster" src={poster} alt="Pôster do filme" loading="lazy" />
      ) : (
        <div className="poster" aria-hidden />
      )}
      <div className="card-body">
        <div className="title">{movie.title}</div>
        <div className="meta">
          <span className="badge" title="Nota média">★ {movie.vote_average?.toFixed(1)}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
      </div>
    </Link>
  )
}
