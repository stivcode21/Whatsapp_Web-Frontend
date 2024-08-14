import Avatar from "../../components/Avatar"
import { useAuth } from "../../hooks/useAuth"
import InputSearch from "../../components/InputSearch"
import { AccountCircle, Lock, ChatBubble, Notifications, Help, Logout } from "@mui/icons-material"
import { Link, useNavigate } from "react-router-dom"
import { URL } from "../../constants"

export default function Settings() {
  const { user, logoutUser } = useAuth()
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
  }

  async function handleClick(event) {
    const element = event.target.closest("div[data-settings]")
    const dataset = element.dataset.settings

    if(dataset === "logout") {
      const response = await fetch(URL.user + "logout", {
        method: "GET",
        credentials: "include"
      })

      if(response.ok) {
        logoutUser()
        navigate("/login")
      }
    }

    console.log(dataset)
  }

  return (
    <div className="h-full flex flex-col">
      <header>
        <div className="h-[60px] pl-[25px] pr-[20px] flex items-center">
          <h1 className="text-white font-bold text-2xl"> Ajustes </h1>
        </div>
        <form onSubmit={handleSubmit} className="flex">
          <InputSearch 
            name="settings"
            placeholder="Busca en los ajustes"
          />
        </form>
      </header>
      <div className="flex-1 overflow-y-auto">
        <Link 
          to="/profile"
          className="h-[100px] flex items-center cursor-pointer hover:bg-blue-dark"
        >
          <Avatar src={user.image} className="size-[82px] my-2 mx-4"/>
          <div className="info">
            <h3 className="text-[17px] font-normal text-white">{ user?.name }</h3>
            <p className="text-[14px] text-grey-light opacity-[0.8]">{ user?.description }</p>
          </div>
        </Link>
        <div className="flex flex-col" onClick={handleClick}>
          <SettingsItem title="Cuenta" data="acount">
            <AccountCircle />
          </SettingsItem>
          <SettingsItem title="Privacidad" data="privacity">
            <Lock />
          </SettingsItem>
          <SettingsItem title="Chats" data="chats">
            <ChatBubble />
          </SettingsItem>
          <SettingsItem title="Notificaciones" data="notifications">
            <Notifications />
          </SettingsItem>
          <SettingsItem title="Ayuda" data="help">
            <Help />
          </SettingsItem>
          <SettingsItem title="Cerrar Sesión" className="text-red-main" data="logout">
            <Logout />
          </SettingsItem>
        </div>
      </div>
    </div>
  )
}

function SettingsItem({ children, title, className, data }) {
  return (
    <div className={"h-[70px] flex w-full text-grey-light cursor-pointer hover:bg-blue-dark " + className} data-settings={data}>
      <div className="w-[60px] px-4 flex items-center justify-center">
        { children }
      </div>
      <div className="flex-1 flex items-center border-b-[1px] border-grey-border">
        <h3>{ title }</h3>
      </div>
    </div>
  )
}