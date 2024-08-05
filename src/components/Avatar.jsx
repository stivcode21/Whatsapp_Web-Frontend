import { useAuth } from "../hooks/useAuth";


export default function Avatar({ className }) {
  const { user } = useAuth()

  return (
    <div className={"flex rounded-full overflow-hidden " + className}>
      <img src={user.image} alt="" className="size_full object-cover"/>
    </div>
  )
}