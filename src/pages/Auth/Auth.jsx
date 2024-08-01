import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"


export default function Auth() {
  const { isAuthenticated, isLoading } = useAuth()

  if(isLoading) return <h1> Cargando </h1>

  if(isAuthenticated) return <Outlet />

  return <Navigate to="/login" />
}
