import { Navigate, Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar"
import "./Main.css"
import { useAuth } from "../../hooks/useAuth"

export default function Main() {
  const { user } = useAuth()

  if(user.isNew) return <Navigate to="/create-profile" />

  return (
    <main className="main">
      <Navbar />
      <section className="outlet">
        <Outlet />
      </section>
      <section className="chat-select">
      </section>
    </main>
  )
}