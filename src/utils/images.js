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

export {
  imagetoBase64
}