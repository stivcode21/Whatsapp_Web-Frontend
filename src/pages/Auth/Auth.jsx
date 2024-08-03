import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"


export default function Auth() {
  const { isAuthenticated } = useAuth()

  if(isAuthenticated) return <Outlet />

  return <Navigate to="/login" />
}
