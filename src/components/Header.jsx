import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import SearchBar from './SearchBar'

export default function Header() {
  const navigate = useNavigate()
  const [params] = useSearchParams()

  const onSearch = (q) => {
    const next = new URLSearchParams(params)
    if (q) next.set('q', q)
    else next.delete('q')
  // reset pagination when a new search is performed
  next.delete('page')
    navigate({ pathname: '/', search: next.toString() })
  }

  return (
    <header className="header" role="banner">
      <div className="container header-wrap">
        <Link to="/" className="brand" aria-label="Ir para a página inicial">
          <span className="brand-badge" aria-hidden>CS</span>
          <span>Cine-Stats</span>
        </Link>
        <SearchBar defaultValue={params.get('q') ?? ''} onSearch={onSearch} />
      </div>
    </header>
  )
}
