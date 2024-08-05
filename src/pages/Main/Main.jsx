import { Navigate, Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar"
import { useAuth } from "../../hooks/useAuth"
import { Suspense } from "react"

export default function Main() {
  const { user } = useAuth()

  if(user?.isNew) return <Navigate to="/create-profile" />

  return (
    <main className="flex h-[100vh]">
      <Navbar />
      <section className="h-[100vh] bg-blue-black w-[30%] border-r-[1px] border-grey-border">
        <Suspense>
          <Outlet />
        </Suspense>
      </section>
      <section className="bg-blue-dark flex-1">
      </section>
    </main>
  )
}