export default function Spinner({ label = 'Carregando…' }) {
  return (
    <div role="status" aria-live="polite" style={{display:'grid',placeItems:'center',padding:'2rem'}}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
        <circle cx="12" cy="12" r="10" strokeOpacity="0.2" />
        <path d="M22 12a10 10 0 0 1-10 10" strokeWidth="2">
          <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="0.8s" repeatCount="indefinite" />
        </path>
      </svg>
      <span className="visually-hidden">{label}</span>
    </div>
  )
}
