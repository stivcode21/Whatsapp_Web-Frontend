import { 
  EmailOutlined,
  LockOutlined,
  Person,
  InfoOutlined
} from "@mui/icons-material/"
import { useRef } from "react"

const ICON_NAMES = {
  "email": <EmailOutlined fontSize="small" />,
  "password": <LockOutlined fontSize="small" />,
  "name": <Person />,
  "info": <InfoOutlined />
}

function InputImage(props) {
  const imageRef = useRef(null)

  function handleChange(event) {
    const source = URL.createObjectURL(event.target.files[0])
    imageRef.current.src = source
  }

  return (
    <div className="mb-8 relative">
    <label 
      htmlFor={props.id} 
      className="flex relative size-[120px] rounded-full overflow-hidden border-4 border-white outline outline-green-main outline-2"
    >
      <img 
        src="../../../assets/default.jpg" 
        alt="" 
        ref={imageRef}
        className="w-full h-full object-cover"
      />
      <input 
        type="file" 
        name={props.name} 
        id={props.id} 
        onChange={handleChange}
        className="absolute w-full h-full cursor-pointer rounded-full opacity-0"
      />
    </label>
    <div 
      data-error="true"
      className="absolute text-sm text-red-main translate-x-[-100%] opacity-0 transition transform ease-in-out 300ms"
    >
      Texto inicial
    </div>
  </div>
  )
}


export default function Input(props) {
  if(props.type === "image") return <InputImage {...props} />

  return (
    <div className="mb-8 relative w-full">
      <label 
        htmlFor={props.id} 
        className="text-green-700 px-3.5 flex gap-2 border-[1px] border-green-700 items-center rounded-2xl hover:border-green-main hover:text-green-main"
      >
        {
          props.icon && ICON_NAMES[props.icon]
        }
        <input className="text-base text-grey-light py-3 w-full placeholder:text-grey-medium"
          type={props.type} 
          name={props.name} 
          id={props.id}
          placeholder={props.placeholder}
          autoComplete="off"
        />
        {
          props.children
        }
      </label>
      <div 
        data-error="true"
        className="absolute text-sm text-red-main translate-x-[-100%] opacity-0 transition transform ease-in-out 300ms"
      >
        Texto inicial
      </div>
    </div>
  )
}