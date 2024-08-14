import { useState } from "react";
import { getDataForm, validateForm } from "../utils/form";
import { NAVIGATE_URL, URL } from "../constants";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";
import { Buffer } from "buffer";

function imagetoBase64(image) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()

    fileReader.addEventListener("load", () => {
      resolve(fileReader.result)
    })

    fileReader.addEventListener("error", (error) => {
      reject(error)
    })

    fileReader.readAsDataURL(image)
  })
}

export default function useForm(inputTypes) {
  const [message, setMessage] = useState("")
  const { user, logedUser } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(event, endpoint, method) {
    event.preventDefault()
    const formElement = event.target

    const formData = getDataForm(formElement)
    const isCorrect = validateForm(formData, formElement, inputTypes)

    if(!isCorrect) return

    if(formData?.image) {
      formData.image = await imagetoBase64(formData.image)
    }

    if(user?.id) {
      formData.id = user.id
    }

    try {
      const response = await fetch(URL["user"] + endpoint, {
        method,
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if(data.user.id) {
        if(data.user.image) {
          data.user.image = Buffer.from(data.image).toString("utf-8")
        }
        logedUser(data)
        navigate(NAVIGATE_URL[endpoint])
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