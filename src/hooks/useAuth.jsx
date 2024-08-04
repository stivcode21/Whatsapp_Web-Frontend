import { createContext, useState, useContext, useEffect } from "react"
import { URL } from "../constants"
import Cookies from "js-cookie"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null)

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

        console.log(data.user)

        if(data.user) {
          logedUser(data.user)
        } else {
          setIsLoading(false)
        }
      } catch (error) {
        setIsLoading(false)
      }
    }

    isAuth()
  }, [])

  function logedUser(data) {
    setUser(data)
    setIsAuthenticated(true)
    setIsLoading(false)
  }

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      isLoading,
      logedUser
    }}>
      { children }
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
} 