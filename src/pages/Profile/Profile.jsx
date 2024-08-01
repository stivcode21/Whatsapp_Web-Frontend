import "./Profile.css"
import { useAuth } from "../../hooks/useAuth"
import Avatar from "../../components/Avatar"

export default function Profile() {
  const { user } = useAuth()
  const { name, email, description } = user

  return(
    <div className="profile">
      <header>
        <h1> Perfil </h1>
      </header>
      <div className="content">
        <div className="image">
          <Avatar width="200px" height="200px" className="image-user"/>
        </div>
        <form>
          <label htmlFor="name">
            <span>Nombre</span>
            <div>
              <div id="name" name="name" role="textarea" className="input">
                { name }
              </div>
            </div>
          </label>

          <label htmlFor="description">
            <span>Descripción</span>
            <div>
              <div id="description" name="description" role="textarea" className="input">
                { description }
              </div>
            </div>
          </label>

          <label htmlFor="email">
            <span>Correo electrónico </span>
            <div>
              <div id="email" name="email" role="textarea" className="input">
                {email}
              </div>
            </div>
          </label>
        </form>
      </div>
    </div>
  )
}