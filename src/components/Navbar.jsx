import { NavLink } from "react-router-dom"
import Avatar from "./Avatar"

import { ChatBubble, DataUsage, Settings } from "@mui/icons-material"

function MenuLink({ to, children }) {
  return (
    <li className="flex rounded-full size-10 justify-center items-center has-[a.active]:bg-grey-main">
      <NavLink to={to} className={`size-full flex items-center justify-center ${({ isActive, isPending }) =>
        isActive ? "active" : isPending ? "pending" : ""
        }`}>
          { children }
      </NavLink>
    </li>
  )
}

export default function Navbar() {
  return (
    <section className="flex w-[60px] bg-blue-dark">
      <nav className="w-full">
        <ul className="h-full flex flex-col items-center justify-between py-4 text-grey-light">
          <div className="flex flex-col gap-4">
            <MenuLink to="">
              <ChatBubble fontSize="small" />
            </MenuLink>
            <MenuLink to="/states">
              <DataUsage />
            </MenuLink>
          </div>
          <div className="flex flex-col gap-4">
            <MenuLink to="/settings">
              <Settings />  
            </MenuLink>
            <MenuLink to="/profile">
              <Avatar className="size-[30px] flex"/>
            </MenuLink>
          </div>
        </ul>
      </nav>
    </section>
  )
}