import useModal from "../hooks/useModal.jsx"

export default function Options({ children, url, id }) {
  const { handleOpen } = useModal(url, id)

  return (
    <div className="relative">
      <div 
        className="relative cursor-pointer size-10 rounded-full flex items-center justify-center" 
        onClick={handleOpen}
        id={id}
      >
        { children }
      </div>
      <span className="absolute right-0 bottom-[-5px]">
      </span>
    </div>
  )
}