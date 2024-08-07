function Select({ value, isDefault, name, id, children, className }) {
  return (
    <label htmlFor={value} className={className + " relative"}>
      {children}
      <input 
        type="radio" 
        name={name}
        id={id}
        className="absolute top-0 left-0 w-full h-full cursor-pointer opacity-0" 
        value={value}
        defaultChecked={isDefault} 
      />
    </label>
  )
}
 
export function SelectFilter({ value, isDefault, name, id, children }) {
  return (
    <Select 
      className="bg-grey-input text-blue-grey rounded-2xl px-3 py-1 has-[:checked]:bg-green-dark has-[:checked]:text-green-main"
      value={value}
      name={name}
      id={id}
      isDefault={isDefault}
    >
      { children }
    </Select>
  )
}

export function SelectMenu({ value, isDefault, name, children }) {
  return(
    <Select
      className="w-[40px] h-[40px] flex justify-center items-center rounded-full has-[:checked]:bg-grey-main"
      value={value}
      name={name}
      isDefault={isDefault}
    >
      { children }
    </Select>
  )
}