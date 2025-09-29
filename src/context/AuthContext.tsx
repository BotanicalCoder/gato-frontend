import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { login as loginApi, register as registerApi, type LoginDto, type RegisterDto } from '../api/auth'
import { useNavigate } from 'react-router-dom'

type AuthContextType = {
  token: string | null
  login: (dto: LoginDto) => Promise<void>
  register: (dto: RegisterDto) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }){
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('gato.token'))
  const nav = useNavigate()

  useEffect(() => {
    if(token) localStorage.setItem('gato.token', token)
    else localStorage.removeItem('gato.token')
  }, [token])

  const value = useMemo<AuthContextType>(() => ({
    token,
    async login(dto){
      const data = await loginApi(dto)
      setToken(data.token)
      nav('/dashboard', { replace: true })
    },
    async register(dto){
      await registerApi(dto)
      // After register, go to login
      nav('/login?registered=1', { replace: true })
    },
    logout(){
      setToken(null)
      nav('/login', { replace: true })
    }
  }), [token, nav])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(){
  const ctx = useContext(AuthContext)
  if(!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}