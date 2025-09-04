import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL || 'https://api.themoviedb.org/3',
})

api.interceptors.request.use((config) => {
  const raw = import.meta.env.VITE_TMDB_API_KEY?.trim()
  const hasValue = typeof raw === 'string' && raw.length > 0
  // strip accidental 'Bearer ' prefix if present
  const value = hasValue && raw.toLowerCase().startsWith('bearer ') ? raw.slice(7) : raw

  // Heuristic: JWT (v4) has two dots; v3 key is shorter and no dots
  if (value && value.split('.').length === 3) {
    config.headers = {
      ...(config.headers || {}),
      Authorization: `Bearer ${value}`,
    }
  } else if (value) {
    config.params = { ...(config.params || {}), api_key: value }
  }

  config.params = { language: 'pt-BR', include_adult: false, ...config.params }
  return config
})

export default api
