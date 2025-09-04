import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section style={{ padding: '2rem 0', textAlign: 'center' }}>
      <h1 style={{ marginTop: 0 }}>Página não encontrada</h1>
      <p style={{ color: 'var(--muted)' }}>O link que você acessou não existe.</p>
      <Link to="/">
        <button>Voltar para a Home</button>
      </Link>
    </section>
  )
}
