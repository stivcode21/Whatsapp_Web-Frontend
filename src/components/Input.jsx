import { 
  EmailOutlined,
  LockOutlined,
} from "@mui/icons-material/"

const ICON_NAMES = {
  "email": <EmailOutlined fontSize="small" />,
  "password": <LockOutlined fontSize="small" />
}

export default function Input(props) {
  return (
    <div className="mb-8 relative">
      <label 
        htmlFor={props.id} 
        className="text-green-main px-3.5 flex gap-2 border-[1px] border-green-700 items-center rounded-2xl"
      >
        {
          props.icon && ICON_NAMES[props.icon]
        }
        <input className="text-base text-grey-light py-3 flex-1 placeholder:text-grey-medium"
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