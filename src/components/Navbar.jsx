import { NavLink } from "react-router-dom"
import Avatar from "./Avatar"

import { ChatBubble, DataUsage, MailOutline, Settings } from "@mui/icons-material"

function MenuLink({ to, children }) {
  return (
    <li className="flex rounded-full size-10 justify-center items-center has-[a.active]:bg-grey-main">
      <NavLink to={to} className={`size-full flex items-center justify-center ${({ isActive }) =>
        isActive ? "active" : ""
        }`}>
          { children }
      </NavLink>
    </li>
  )
}

export default function Navbar() {
  return (
    <section className="border-grey-border overflow-y-auto flex usm:bg-blue-black border-t-[1px] w-full sm:max-w-[60px] border-r-[1px] bg-blue-dark">
      <nav className="flex w-full items-center justify-center">
        <ul className="py-4 flex usm:flex-row gap-10 h-full items-center sm:w-full gap-4 flex-col justify-between text-grey-light">
          <div className="flex usm:gap-10 sm:flex-col gap-4">
            <MenuLink to="">
              <ChatBubble fontSize="small" />
            </MenuLink>
            <MenuLink to="/states">
              <DataUsage />
            </MenuLink>
            <MenuLink to="/contacts">
              <MailOutline />
            </MenuLink>
          </div>
          <div className="flex usm:gap-10 sm:flex-col gap-4">
            <MenuLink to="/settings">
              <Settings />  
            </MenuLink>
            <MenuLink to="/profile">
              <Avatar className="size-[32px]"/>
            </MenuLink>
          </div>
        </ul>
      </nav>
    </section>
  )
}