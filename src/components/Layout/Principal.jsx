import Chats from "../Chats/Chats";
import ChatMenu from "../Chats/ChatMenu";
import ChatSelect from "../Chats/ChatSelect"
import data from "../../database/chats.json";
import { useState } from "react";

export default function Principal() {
  const [selectChat, setSelectChat] = useState(undefined)

  return (
    <>
     <section className="flex overflow-hidden">
      <ChatMenu />
      <Chats onSelect={setSelectChat}/>
      <div className="h-full w-8/12">
        <ChatSelect user={data[selectChat]} />
      </div>
    </section>
    </>
  )
}