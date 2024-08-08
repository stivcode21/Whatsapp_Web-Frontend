export function formatTime() {
  const date = new Date()
  let hours = date.getHours()
  const minutes = date.getMinutes()

  let result = ""

  if (hours > 12) {
    hours = hours - 12
    result = hours + ":" + minutes + " p.m"
  } else {
    result = hours + ":" + minutes + " a.m"
  }

  return result
}