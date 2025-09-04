export default function Pagination({ page, totalPages, onPageChange }) {
  const prevDisabled = page <= 1
  const nextDisabled = page >= totalPages
  const go = (p) => () => onPageChange?.(p)

  const pages = [page - 1, page, page + 1].filter(p => p >= 1 && p <= totalPages)

  return (
    <nav aria-label="Paginação" style={{display:'flex',gap:'.5rem',alignItems:'center',justifyContent:'center',margin:'1rem 0'}}>
      <button onClick={go(page - 1)} disabled={prevDisabled} aria-label="Página anterior">Anterior</button>
      {pages[0] > 1 && <span aria-hidden>…</span>}
      {pages.map(p => (
        <button key={p} onClick={go(p)} aria-current={p===page ? 'page' : undefined} style={{background:p===page? 'var(--brand-600)':'var(--brand)'}}>{p}</button>
      ))}
      {pages[pages.length-1] < totalPages && <span aria-hidden>…</span>}
      <button onClick={go(page + 1)} disabled={nextDisabled} aria-label="Próxima página">Próxima</button>
    </nav>
  )
}
