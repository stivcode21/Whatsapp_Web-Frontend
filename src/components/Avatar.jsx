import { useAuth } from "../hooks/useAuth";
import "./Avatar.css"

export default function Avatar({ width, height, className }) {
  const { user } = useAuth()

  return (
    <div style={{
      width,
      height 
    }} className={"avatar " + className}>
      <img src={user.image} alt="" />
    </div>
  )
}