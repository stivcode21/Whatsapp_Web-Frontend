import { useState } from "react";
import { getDataForm, validateForm } from "../utils/form";
import { URL } from "../constants";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";

export default function useForm(inputTypes) {
  const [message, setMessage] = useState("")
  const { logedUser } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(event, typeUrl, endpoint, method) {
    event.preventDefault()
    const formElement = event.target

    const formData = getDataForm(formElement)
    const isCorrect = validateForm(formData, formElement, inputTypes)

    if(!isCorrect) return

    try {
      const response = await fetch(URL[typeUrl] + endpoint, {
        method,
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if(response.ok) {
        logedUser(data)
        navigate("/create-profile")
      }else {
        setMessage(data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return {
    message, 
    handleSubmit
  }
}