export function MovieCardSkeleton() {
  return (
    <div className="card" aria-hidden>
      <div className="poster skeleton" />
      <div className="card-body">
        <div className="skeleton" style={{ height: 14, borderRadius: 6 }} />
        <div
          className="skeleton"
          style={{ height: 12, width: '60%', marginTop: 8, borderRadius: 6 }}
        />
      </div>
    </div>
  )
}

export function GridSkeleton({ count = 8 }) {
  return (
    <div className="grid" aria-label="Carregando filmes">
      {Array.from({ length: count }).map((_, i) => (
        <MovieCardSkeleton key={i} />
      ))}
    </div>
  )
}

export function DetailsSkeleton() {
  return (
    <section style={{ display: 'grid', gap: '1.5rem', marginTop: '1rem' }} aria-hidden>
      <div style={{ display: 'grid', gap: '1rem' }}>
        <div
          className="skeleton"
          style={{ width: 'min(320px,60vw)', aspectRatio: '2/3', borderRadius: 12 }}
        />
        <div>
          <div className="skeleton" style={{ height: 20, width: '70%', borderRadius: 8 }} />
          <div
            className="skeleton"
            style={{ height: 12, width: '100%', marginTop: 10, borderRadius: 6 }}
          />
          <div
            className="skeleton"
            style={{ height: 12, width: '90%', marginTop: 6, borderRadius: 6 }}
          />
        </div>
      </div>
      <div className="skeleton" style={{ height: 260, borderRadius: 12 }} />
    </section>
  )
}
