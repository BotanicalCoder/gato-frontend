import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Todos from './pages/Todos'
import { useAuth } from './context/AuthContext'

function Nav(){
  const { token, logout } = useAuth()
  return (
    <nav className="nav">
      <div className="flex items-center gap-2">
        <div className="brand-badge arcade-title">G</div>
        <div>
          <div className="arcade-title text-sm">Gato</div>
          <div className="text-xs text-slate-400">Arcade UI</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        {token ? (
          <>
            <Link className="link" to="/dashboard">Dashboard</Link>
            <Link className="link" to="/todos">Todos</Link>
            <button className="btn-ghost" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link className="link" to="/login">Login</Link>
            <Link className="btn-arcade" to="/register">Sign up</Link>
          </>
        )}
      </div>
    </nav>
  )
}

function RequireAuth({ children }: { children: JSX.Element }){
  const { token } = useAuth()
  const loc = useLocation()
  if(!token) return <Navigate to="/login" replace state={{ from: loc }} />
  return children
}

export default function App(){
  return (
    <>
      <Nav />
      <div className="container-page">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
          <Route path="/todos" element={<RequireAuth><Todos /></RequireAuth>} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </div>
    </>
  )
}