import { SearchOutlined } from "@mui/icons-material"
import { forwardRef } from "react"

const InputSearch = forwardRef(function InputSearch({ name, placeholder, className}, ref) {
  return (
    <label htmlFor={name} className={"flex items-center w-full my-2 mx-4 py-2 px-4 bg-grey-input rounded-[8px] " + className}>
      <div className="pr-2 text-grey-light">
        <SearchOutlined fontSize="small"/>
      </div>
      <input
        ref={ref} 
        type="text" 
        name={name} 
        id={name} 
        placeholder={placeholder}
        autoComplete="off"
        className="w-full text-[15px] bg-transparent text-white"
      />
    </label>
  )
})

export default InputSearch