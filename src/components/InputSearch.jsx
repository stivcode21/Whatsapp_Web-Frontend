import { SearchOutlined } from "@mui/icons-material"

export default function InputSearch({ name, placeholder }) {
  return (
    <label htmlFor={name} className="flex items-center w-full my-2 mx-4 py-2 px-4 bg-grey-input rounded-[8px]">
      <div className="pr-2 text-grey-light">
        <SearchOutlined fontSize="small"/>
      </div>
      <input 
        type="text" 
        name={name} 
        id={name} 
        placeholder={placeholder}
        autoComplete="off"
        className="w-full text-[15px] bg-transparent text-white"
      />
    </label>
  )
}