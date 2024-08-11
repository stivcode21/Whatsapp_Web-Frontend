import { createContext, useState, useContext, useEffect } from "react"
import { URL } from "../constants"
import Cookies from "js-cookie"
import { Buffer } from "buffer"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null)
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    async function isAuth() {
      const cookie = Cookies.get("token")
      
      if(!cookie) return setIsLoading(false)

      try {
        const response = await fetch(URL["user"] + "verify-token", {
          method: "GET",
          credentials: "include"
        })

        const data = await response.json()

        if(data.user) {
          if(data.user.image) {
            data.user.image = Buffer.from(data.user.image).toString("utf-8")
          }
          logedUser(data.user)
        }
      } catch (error) {
        setIsLoading(false)
      }
    }

    isAuth()
  }, [])

  function logedUser(data) {
    setUser(data)
    setIsLoading(false)
    setIsAuthenticated(true)
  }

  function logoutUser() {
    setUser(null)
    setIsAuthenticated(false)
  }

  function updateContacts(newContact) {
    setContacts(prev => {
      return [...prev, newContact]
    })
  }

  return (
    <AuthContext.Provider value={{
      user,
      contacts,
      isAuthenticated,
      isLoading,
      logedUser,
      logoutUser,
      updateContacts
    }}>
      { children }
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
} 