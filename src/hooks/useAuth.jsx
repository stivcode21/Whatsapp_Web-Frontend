import { createContext, useState, useContext } from "react"
/*import { AUTH_URL } from "../constants"
import Cookies from "js-cookie"*/

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [user, setUser] = useState(null)

  /*useEffect(() => {
    async function isAuth() {
      const cookies = Cookies.get()
      
      if(cookies.token) {
        const response = await fetch(AUTH_URL + "/verify", {
          method: "GET",
          credentials: "include"
        })

        const user = await response.json()

        if(user.id) {
          setUser(user)
          setIsAuthenticated(true)
        }

      }

      setIsLoading(false)
    }

    isAuth()

    setIsLoading(false)
  }, [])*/

  function logedUser(data) {
    setUser(data)
    setIsAuthenticated(true)
  }

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      logedUser
    }}>
      { children }
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
} 