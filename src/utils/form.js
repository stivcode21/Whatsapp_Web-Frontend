export function getDataForm(formElement) {
  return Object.fromEntries(new FormData(formElement))
}

export function validateForm(form, ref) {
  const errorElements = ref.querySelectorAll("p")

  let value
  let i = 0
  let badInputs = 0

  for(let key in form) {
    value = form[key]
    const isCorrect = validateType(typeof value, value)
    if(!isCorrect) {
      errorElements[i].classList.add("show")
      badInputs ++ 
    }else {
      errorElements[i].classList.remove("show")
    }
    i++
  }

  return badInputs === 0
}

function validateType(type, value) {
  if(type === "string") return validateString(value)
  if(type === "object") return validateObject(value)
}

function validateString(string) {
  if(string.length <= 0) return false
  return true
}

function validateObject(object) {
  if(object instanceof File) {
    if(object.size === 0) return false
  }
  return true
}