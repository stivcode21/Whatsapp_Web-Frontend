import { Create, Done } from "@mui/icons-material";
import { useState } from "react";

export default function Input({ text, defaultValue, name, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)

  if (!isEditing) return (
    <div className="px-[30px] pt-[14px] pb-[10px] mb-[10px] font-light text-white">
      <p className="mb-[14px] text-green-main text-sm">{text}</p>
      <div className="flex justify-between border-b-2 border-transparent">
        <div className="flex items-center flex-1">
         <p>{defaultValue}</p>
        </div>
        <div
          className="text-grey-light cursor-pointer"
          onClick={() => setIsEditing(!isEditing)}
        >
          <Create />
        </div>
      </div>
    </div>
  )

  return (
    <div className="px-[30px] pt-[14px] pb-[10px] mb-[10px] font-light text-white">
      <p className="mb-[14px] text-green-main text-sm">{text}</p>
      <div className="flex justify-between border-b-2 border-grey-light [&:has(input:focus)]:border-green-main">
        <div className="flex items-center flex-1">
          <input
            type="text"
            name={name}
            autoComplete="off"
            className="w-[100%] bg-transparent outline-none" autoFocus defaultValue={defaultValue}
          />
        </div>
        <button type="submit" onClick={() => {onEdit(setIsEditing, name)}}> 
          <Done /> 
        </button>
      </div>
    </div>
  )
}