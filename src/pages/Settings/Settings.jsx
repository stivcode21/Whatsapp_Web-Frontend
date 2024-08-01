import "./Settings.css"
import Avatar from "../../components/Avatar"
import { useAuth } from "../../hooks/useAuth"

export default function Settings() {
  const { user } = useAuth()

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <div className="settings">
      <header>
        <div className="title">
          <h1> Ajustes </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <InputSearch 
            name="settings"
            placeholder="Busca en los ajustes"
          />
        </form>
      </header>
      <div className="content">
        <div className="user-info">
          <Avatar width="82px" height="82px" className="separator"/>
          <div className="info">
            <h3>{ user.name }</h3>
            <p>{ user.description }</p>
          </div>
        </div>
        <div className="list">
          <SettingsItem title="Cuenta">
            {/* <FontAwesomeIcon icon={faCircleUser} size="lg" /> */}
          </SettingsItem>
          <SettingsItem title="Privacidad">
            {/* <FontAwesomeIcon icon={faLock} size="lg" /> */}
          </SettingsItem>
          <SettingsItem title="Chats">
            {/* <FontAwesomeIcon icon={faMessage} size="lg" /> */}
          </SettingsItem>
          <SettingsItem title="Notificaciones">
            {/* <FontAwesomeIcon icon={faBell} size="lg" /> */}
          </SettingsItem>
          <SettingsItem title="Ayuda">
            {/* <FontAwesomeIcon icon={faCircleQuestion} size="lg" /> */}
          </SettingsItem>
          <SettingsItem title="Cerrar Sesión">
            {/* <FontAwesomeIcon icon={faRightFromBracket} size="lg" /> */}
          </SettingsItem>
        </div>
      </div>
    </div>
  )
}

function SettingsItem({ children, title }) {
  return (
    <div className="settings-item">
      <div className="icon">
        { children }
      </div>
      <div className="text">
        <h3>{ title }</h3>
      </div>
    </div>
  )
}

function InputSearch({ name, placeholder }) {
  return (
    <label htmlFor={name} className="input-search">
      <input 
        type="text" 
        name={name} 
        id={name} 
        placeholder={placeholder}
        autoComplete="off"
      />
    </label>
  )
}