import { NavLink } from "react-router-dom"
import "./Navbar.css"
import Avatar from "./Avatar"


export default function Navbar() {
  return (
    <section className="navbar">
      <nav>
        <ul>
          <div className="top">
            <li> 
              <NavLink to="" className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }>
                {/* <FontAwesomeIcon icon={faMessage} size="lg"/> */}
              </NavLink>
            </li>
            <li> 
              <NavLink to="states" className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }>
                {/* <FontAwesomeIcon icon={faCircleNotch} size="lg"/> */}
              </NavLink>
            </li>
          </div>
          <div className="bottom">
            <li> 
              <NavLink to="settings" className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }>
                {/* <FontAwesomeIcon icon={faGear} size="lg"/> */}
              </NavLink>
            </li>
            <li> 
              <NavLink to="profile" className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }>
                <Avatar width="35px" height="35px"/>
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </section>
  )
}