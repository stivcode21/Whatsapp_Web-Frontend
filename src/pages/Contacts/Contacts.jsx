import InputSearch from "../../components/InputSearch";
import { getDataForm } from "../../utils/form";
import { URL } from "../../constants";
import { useRef, useState } from "react";
import Avatar from "../../components/Avatar";
import { Add } from "@mui/icons-material";
import { useAuth } from "../../hooks/useAuth"

function debounce(callback, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      callback.apply(this, args)
    }, delay)
  }
}

export default function Contacts() {
  const { user, updateContacts, contacts } = useAuth()
  const [users, setUsers] = useState([])
  const inputRef = useRef(null)

  function handleSubmit(event) {
    event.preventDefault()
  }

  async function handleChange(event) {
    const formElement = event.target.closest("form")
    const email = getDataForm(formElement).email

    if(email.length <= 0) return setUsers([])

    try {
      const response = await fetch(URL["contact"] + "filter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          id: user.id
        })
      })

      const usersFound = await response.json()

      setUsers(usersFound)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleClick(id) {
    const response = await fetch(URL["contact"] + "add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id,
        userId: user.id
      })
    })

    const newContact = await response.json()
    updateContacts(newContact)
    setUsers([])
  }

  return (
    <div className="flex flex-col h-full">
      <header className="h-[60px] px-5 flex items-center">
        <h1 className="text-2xl font-bold text-[white]">Contactos</h1>
      </header>
      <form className="flex flex-wrap" onSubmit={handleSubmit} onChange={debounce(handleChange, 1000)}>
        <InputSearch
          name="email"
          placeholder="Buscar email"
          ref={inputRef}
        />
        <div className="mx-4 relative px-4 w-full">
          <UsersFounded users={users} onClick={handleClick}/>
        </div>
      </form>
      <div>
        {
          contacts.map(contact => {
            return (
              <div key={contact.id} className="cursor-pointer px-2 grid grid-cols-[auto_1fr] items-center text-sm gap-2 py-2 hover:bg-blue-black rounded">
                <div>
                  <Avatar src={contact.image} className="size-10"/>
                </div>
                <div>
                  <h3 className="text-nowrap text-bold w-full overflow text-truncate text-green-main"> {contact.name} </h3>
                  <p className="text-xs overflow text-truncate w-full text-nowrap text-grey-light"> {contact.email} </p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

function UsersFounded({ users, onClick }) {
  
  if(users.length <= 0) return

  return (
    <div className="grid grid-rows-[0fr] inset-x-0 bg-grey-input absolute text-white border-t-[1px] border-grey-border rounded-br rounded-bl animate-fadeIn max-h-64">
      <div className="flex flex-col gap-2 p-4 overflow-y-auto">
        {
          users.map(user => {
            return (
              <div key={user.id} className="cursor-pointer px-2 grid grid-cols-[auto_1fr_auto] items-center text-sm gap-2 py-2 hover:bg-blue-black rounded" onClick={() => onClick(user.id)}>
                <div>
                  <Avatar src={user.image} className="size-10"/>
                </div>
                <div>
                  <h3 className="text-nowrap text-bold w-full overflow text-truncate text-green-main"> {user.name} </h3>
                  <p className="text-xs overflow text-truncate w-full text-nowrap text-grey-light"> {user.email} </p>
                </div>
                <div className="rounded-full text-green-main bg-green-100 p-[4px]">
                  <Add />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}