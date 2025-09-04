import { useEffect, useState } from 'react'
import api from '../services/api'

export function usePopularMovies(page = 1) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    let alive = true
    setLoading(true)
    setError(null)
    api.get('/movie/popular', { params: { page }})
      .then((res) => { if (alive) setData(res.data) })
      .catch((err) => { if (alive) setError(err) })
      .finally(() => { if (alive) setLoading(false) })
    return () => { alive = false }
  }, [page])

  return { data, loading, error }
}

export function useSearchMovies(query, page = 1) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!query) return
    let alive = true
    setLoading(true)
    setError(null)
    api.get('/search/movie', { params: { query, page }})
      .then((res) => { if (alive) setData(res.data) })
      .catch((err) => { if (alive) setError(err) })
      .finally(() => { if (alive) setLoading(false) })
    return () => { alive = false }
  }, [query, page])

  return { data, loading, error }
}

export function useMovieDetails(id) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return
    let alive = true
    setLoading(true)
    setError(null)
    api.get(`/movie/${id}`)
      .then((res) => { if (alive) setData(res.data) })
      .catch((err) => { if (alive) setError(err) })
      .finally(() => { if (alive) setLoading(false) })
    return () => { alive = false }
  }, [id])

  return { data, loading, error }
}
