import { useState, useEffect, createContext, useContext } from "react"
import { useNavigate } from "react-router-dom"

interface AuthContextType {
  isAuthenticated: boolean
  login: (user: string) => void
  logout: () => void
  user: string | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<string | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem("auth")
    if (storedUser) {
      setIsAuthenticated(true)
      setUser(storedUser)
    }
  }, [])

  const login = (user: string) => {
    localStorage.setItem("auth", user)
    setUser(user)
    setIsAuthenticated(true)
  }

  const logout = () => {
    localStorage.removeItem("auth")
    setUser(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

interface Props {
  children: React.ReactNode
}

export default function RequireAuth({ children }: Props) {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/Login")
    }
  }, [isAuthenticated, navigate])

  // Enquanto verifica, você pode retornar um spinner ou null
  if (!isAuthenticated) return null

  return <>{children}</>
}
