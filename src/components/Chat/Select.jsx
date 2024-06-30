export default function Select({ name, value, checked, children }) {
  return (
    <label htmlFor={name} className="bg-grey-main text-blue-gray rounded-2xl px-3 py-1 relative has-[:checked]:bg-green-300 has-[:checked]:text-green-main">
      { children }
      <input type="radio" name={name} className="absolute top-0 left-0 w-full h-full cursor-pointer opacity-0" value={value} defaultChecked={checked}/>
  </label>
  )
}