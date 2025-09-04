import { useState } from 'react'

export default function SearchBar({ onSearch, defaultValue = '' }) {
  const [query, setQuery] = useState(defaultValue)
  const [loading, setLoading] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setLoading(true)
    onSearch?.(query.trim())
    // small UX delay so the button state is visible
    setTimeout(() => setLoading(false), 200)
  }

  return (
    <form className="searchbar" role="search" onSubmit={submit} aria-label="Buscar filmes">
      <label className="visually-hidden" htmlFor="search">Buscar filmes</label>
      <input
        id="search"
        type="search"
        placeholder="Buscar filmes por título…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        autoComplete="off"
      />
      <button type="submit" disabled={loading} aria-busy={loading} aria-label="Buscar">
        {loading ? 'Buscando…' : 'Buscar'}
      </button>
    </form>
  )
}
