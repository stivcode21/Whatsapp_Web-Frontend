import { useAuth } from "../hooks/useAuth";

export default function Avatar({ className }) {
  const { user } = useAuth()

  return (
    <div className={className}>
      <img src={user?.image} alt="" />
    </div>
  )
}