import { useEffect, useState } from 'react'
import api from '../services/api'

export function usePopularMovies(page = 1) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    let alive = true
    const run = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await api.get('/movie/popular', { params: { page } })
        if (alive) setData(res.data)
      } catch (err) {
        if (alive) setError(err)
      } finally {
        if (alive) setLoading(false)
      }
    }
    run()
    return () => {
      alive = false
    }
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
    const run = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await api.get('/search/movie', { params: { query, page } })
        if (alive) setData(res.data)
      } catch (err) {
        if (alive) setError(err)
      } finally {
        if (alive) setLoading(false)
      }
    }
    run()
    return () => {
      alive = false
    }
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
    const run = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await api.get(`/movie/${id}`)
        if (alive) setData(res.data)
      } catch (err) {
        if (alive) setError(err)
      } finally {
        if (alive) setLoading(false)
      }
    }
    run()
    return () => {
      alive = false
    }
  }, [id])

  return { data, loading, error }
}
