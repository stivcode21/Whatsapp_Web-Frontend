export default function Select({ value, children }) {
  return (
    <label htmlFor={value} className="bg-grey-main text-blue-grey rounded-2xl px-3 py-1 relative has-[:checked]:bg-green-300 has-[:checked]:text-green-main">
      {children}
      <input 
        type="radio" 
        name="filter"
        className="absolute top-0 left-0 w-full h-full cursor-pointer opacity-0" 
        value={value}
        defaultChecked={value === "all"} 
      />
    </label>
  )
}