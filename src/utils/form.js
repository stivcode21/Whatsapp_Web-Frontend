export function getDataForm(formElement) {
  return Object.fromEntries(new FormData(formElement))
}

export function validateForm(data, formElement, inputTypes) {
  const errorElements = formElement.querySelectorAll("div[data-error]")

  let badInputs = 0
  let i = 0

  for(let key in data) {
    const result = validateType(inputTypes[i], data[key])

    if(result !== null) {
      errorElements[i].textContent = result.message
      errorElements[i].classList.add("opacity-100", "translate-x-[0%]")
      badInputs++
    } else {
      errorElements[i].classList.remove("opacity-100", "translate-x-[0%]")
    }

    i++
  }

  return badInputs === 0
}

const MAP_FUNCTIONS = {
  "email": validateEmail,
  "password": validatePassword
}

function validateType(type, value) {
  if(value.length <= 0) return setMessage("Campo requerido")
  return MAP_FUNCTIONS[type](value)
}

/*function validateString(string) {
  if(string.length <= 0) return false
  return true
}*/

function validatePassword(password) {
  if(password.length <= 8) return setMessage("La contraseña debe ser de mínimo 8 caracteres")
  return null
}

function validateEmail() {
  return null
}

/*function validateObject(object) {
  if(object instanceof File) {
    if(object.size === 0) return false
  }
  return true
}*/

function setMessage(message) {
  return {
    message
  }
}