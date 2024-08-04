import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

export default function Auth() {
  const { isAuthenticated, isLoading } = useAuth()

  if(isAuthenticated) return <Outlet />

  if(!isLoading) return <Navigate to="/login" />

  return (
    <main className="h-[100vh] flex items-center justify-center bg-blue-black">
      <h1 className="text-grey-light text-4"> Cargando.. </h1>
    </main>
  )
}
