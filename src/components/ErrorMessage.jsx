export default function ErrorMessage({ message = 'Algo deu errado.' }) {
  return (
    <div role="alert" style={{background:'rgba(255,107,107,.12)',border:'1px solid rgba(255,107,107,.35)',color:'#ffb3b3',padding:'1rem',borderRadius:'10px'}}>
      {message}
    </div>
  )
}
