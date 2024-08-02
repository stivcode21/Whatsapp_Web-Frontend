import { getDataForm, validateForm } from "../utils/form";

export default function useForm(inputTypes) {

  function handleSubmit(event) {
    event.preventDefault()
    const formElement = event.target

    const data = getDataForm(formElement)
    const isCorrect = validateForm(data, formElement, inputTypes)

    if(!isCorrect) return
  }

  return {
    handleSubmit
  }
}