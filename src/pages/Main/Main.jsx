import { Navigate, Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar"
import { useAuth } from "../../hooks/useAuth"
import { Suspense } from "react"
import ChatSelect from "../Chats/ChatSelect"

export default function Main() {
  const { user } = useAuth()

  if(user?.isNew) return <Navigate to="/create-profile" />

  return (
    <main className="h-[100vh] flex flex-col-reverse sm:flex-row">
      <Navbar />
      <section className="flex-1 w-full overflow-y-auto bg-blue-black sm:h-[100vh] bg-blue-black border-r-[1px] border-grey-border lg:max-w-[30%]">
        <Suspense>
          <Outlet />
        </Suspense>
      </section>
      <section className="overflow-hidden hidden lg:block bg-blue-dark flex-1">
        <ChatSelect />
      </section>
    </main>
  )
}