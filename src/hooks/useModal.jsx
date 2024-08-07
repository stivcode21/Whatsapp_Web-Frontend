import { lazy, Suspense, useRef } from "react"
import { createRoot } from "react-dom/client"

export default function useModal(url, id) {
  const Modal = lazy(() => import("../components/Modal"))
  const InnerModal = lazy(() => import(url))
  const modalRef = useRef(null)
  let showModal = false
  let root

  function handleOpen() {
    const container = document.getElementById(id)

    if(!container?.nextSibling) return root.unmount()

    function close() {
      container.classList.remove("bg-blue-dark")
      modalRef.current.classList.add("animate-fadeOut")
      modalRef.current.addEventListener("animationend", () => {
        root.unmount()
      }, { once: true })
    }

    if(!showModal) {
      root = createRoot(container.nextSibling)
      container.classList.add("bg-blue-dark")
      root.render(
        <Suspense>
          <Modal ref={modalRef} container={container} close={handleOpen}>
            <InnerModal />
          </Modal>
        </Suspense>
      )
    }else {
      close()
    }
    showModal = !showModal
  }

  return {
    handleOpen
  }
}