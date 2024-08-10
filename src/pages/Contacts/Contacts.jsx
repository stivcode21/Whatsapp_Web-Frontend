import InputSearch from "../../components/InputSearch";
import { getDataForm } from "../../utils/form";
import { URL } from "../../constants";
import { useState } from "react";

function debounce(callback, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      callback.apply(this, args)
    }, delay)
  }
}

// return function(...args) {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };

export default function Contacts() {
  const [users, setUsers] = useState([])

  function handleSubmit(event) {
    event.preventDefault()
  }

  async function handleChange(event) {
    const formElement = event.target.closest("form")
    const email = getDataForm(formElement).email

    try {
      const response = await fetch(URL["contact"] + "add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email
        })
      })

      const usersFound = await response.json()

      setUsers(usersFound)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col h-full">
      <header className="h-[60px] px-5 flex items-center">
        <h1 className="text-2xl font-bold text-[white]">Contactos</h1>
      </header>
      <form className="relative flex" onSubmit={handleSubmit} onChange={debounce(handleChange, 1000)}>
        <InputSearch
          name="email"
          placeholder="Buscar email"
        />
      </form>
      <div className="relative">
        <UsersFounded users={users}/>
      </div>
    </div>
  )
}

function UsersFounded({ users }) {
  if(users.length < 0) return

  return (
    <div className="border absolute left-0 px-4">
      {
        users.map(user => {
          return (
            <div key={user.id}>
              <p> {user.name} </p>
              <p> {user.email} </p>
            </div>
          )
        })
      }
    </div>
  )
}