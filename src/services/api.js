import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_TMDB_BASE_URL || 'https://api.themoviedb.org/3',
})

api.interceptors.request.use((config) => {
  const token = import.meta.env.VITE_TMDB_API_KEY
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  config.params = { language: 'pt-BR', include_adult: false, ...config.params }
  return config
})

export default api
