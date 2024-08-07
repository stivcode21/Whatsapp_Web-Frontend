import { forwardRef, useEffect } from "react"

const Modal = forwardRef(function Modal({ children, container, close }, ref) {
  useEffect(() => {
    function handleClick(event) {
      const hasSameId = event.target.closest("div").id === container.id
      if(!ref.current.contains(event.target) && !hasSameId) {
        close()
      }
    }

    window.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("click", handleClick)
    }
  }, [ref, close, container.id])

  return (
    <div 
      ref={ref} 
      className="text-[14px] py-2 shadow-2xl rounded absolute right-0 bg-blue-dark z-[1] origin-top-right animate-fadeIn"
    >
      {children}
    </div>
  )
})

export default Modal