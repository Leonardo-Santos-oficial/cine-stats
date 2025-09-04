import { Outlet } from 'react-router-dom'
import Header from './components/Header.jsx'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main id="main-content" className="container">
        <Outlet />
      </main>
      <footer className="footer" role="contentinfo">
        <div className="container">
          <p>Cine-Stats • Dados do TMDB</p>
        </div>
      </footer>
    </div>
  )
}

export default App
