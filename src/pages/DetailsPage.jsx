import { useParams } from 'react-router-dom'
import { useMovieDetails } from '../hooks/useMovies'
import Spinner from '../components/Spinner'
import ErrorMessage from '../components/ErrorMessage'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'

const imgBase = import.meta.env.VITE_TMDB_IMAGE_BASE_URL || 'https://image.tmdb.org/t/p'

export default function DetailsPage() {
  const { id } = useParams()
  const { data, loading, error } = useMovieDetails(id)

  if (loading) return <Spinner label="Carregando detalhes" />
  if (error) return <ErrorMessage message="Não foi possível carregar os detalhes." />
  if (!data) return null

  const poster = data.poster_path ? `${imgBase}/w500${data.poster_path}` : ''
  const genres = data.genres?.map(g => g.name).join(', ') || '—'
  const chartData = [
    { name: 'Popularidade', valor: Number(data.popularity?.toFixed(1) || 0) },
    { name: 'Votos', valor: data.vote_count || 0 },
  ]

  return (
    <article style={{display:'grid',gap:'1.5rem',gridTemplateColumns:'1fr',marginTop:'1rem'}}>
      <div style={{display:'grid',gap:'1rem',gridTemplateColumns:'1fr',alignItems:'start'}}>
        {poster && <img src={poster} alt={`Pôster de ${data.title}`} style={{width:'min(320px,60vw)',borderRadius:'12px',border:'1px solid rgba(255,255,255,.06)'}} />}
        <div>
          <h1 style={{margin:'0 0 .5rem'}}>{data.title}</h1>
          <p style={{color:'var(--muted)'}}>{data.overview || 'Sem sinopse disponível.'}</p>
          <div className="meta" style={{marginTop:'.75rem'}}>
            <span className="badge" title="Data de lançamento">{data.release_date}</span>
            <span className="badge" title="Nota média">★ {data.vote_average?.toFixed(1)} ({data.vote_count})</span>
            <span className="badge" title="Gêneros">{genres}</span>
          </div>
        </div>
      </div>

      <section aria-labelledby="chart-title" style={{background:'var(--panel)',padding:'1rem',borderRadius:'12px',border:'1px solid rgba(255,255,255,.06)'}}>
        <h2 id="chart-title" style={{marginTop:0}}>Análise rápida</h2>
        <div style={{width:'100%',height:260}}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 8, right: 8, bottom: 0, left: 8 }}>
              <XAxis dataKey="name" stroke="#9aa3b2" tickLine={false} axisLine={{ stroke: 'rgba(255,255,255,.12)' }} />
              <YAxis stroke="#9aa3b2" tickLine={false} axisLine={{ stroke: 'rgba(255,255,255,.12)' }} />
              <Tooltip cursor={{ fill: 'rgba(255,255,255,.06)' }} contentStyle={{ background:'#0f1320', border:'1px solid rgba(255,255,255,.12)', borderRadius:8 }} />
              <Bar dataKey="valor" fill="var(--brand)" radius={[6,6,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </article>
  )
}
