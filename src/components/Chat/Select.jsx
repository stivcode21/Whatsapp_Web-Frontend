export default function Select({ name, value, children }) {
  return (
    <label htmlFor={name} className="bg-button-bg text-button-text rounded-2xl px-3 py-1 relative has-[:checked]:bg-radio-selected has-[:checked]:text-text-radio-selected">
      { children }
      <input type="radio" name={name} className="absolute top-0 left-0 w-full h-full cursor-pointer opacity-0" value={value}/>
  </label>
  )
}