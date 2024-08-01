import { useState, useRef } from "react"

export default function useFormProfile(){
  const [profileData, setProfileData] = useState({
    name: "Mc Lovin",
    description: "A eso le llamo estrategia"
  })
  
  const formRef = useRef(null)
  
  function handleEdit(setIsEditing, name) {
    const values = Object.fromEntries(new FormData(formRef.current))
  
  
    if (values[name] === profileData[name] || values[name].length < 1) {
      setIsEditing(editing => !editing)
      return
    }
  
    const newProfileData = {
      ...profileData,
      [name]: values[name]
    }
  
    setProfileData(newProfileData)
    setIsEditing(editing => !editing)
  }

  return {profileData, formRef, handleEdit}
}