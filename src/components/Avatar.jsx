import { Buffer } from "buffer"

export default function Avatar({ className, src }) {
  return (
    <div className={"flex rounded-full overflow-hidden " + className}>
      <img src={Buffer.from(src).toString("utf-8")} alt="" className="size_full object-cover"/>
    </div>
  )
}