import Chats from "../Chats/Chats";
import Menu from "../Menu/Menu";
import ChatSelect from "../Chats/ChatSelect"
import Communities from "../Communities/Communities";
import Settings from "../Settings/Settings";
import Profile from "../Profile/Profile";

import data from "../../database/chats.json";
import { useState } from "react";

export default function Principal() {
  const [selectChat, setSelectChat] = useState(undefined)
  const [selectMenu, setSelecMenu] = useState("chats")

  const currentDisplayed = function() {
    if(selectMenu === "chats") {
      return <Chats onSelect={setSelectChat}/>
    }
    if(selectMenu === "communities") {
      return <Communities />
    }
    if(selectMenu === "settings") {
      return <Settings />
    }
    if(selectMenu === "profile") {
      return <Profile />
    }
  }

  return (
    <>
     <section className="flex overflow-hidden">
      <Menu onSelect={setSelecMenu}/>
      <div className="w-4/12 h-screen flex flex-col border-r-[1px] border-grey-main bg-blue-black">
      {
        currentDisplayed()
      }
      </div>
      <div className="h-full w-8/12">
        <ChatSelect user={data[selectChat]} />
      </div>
    </section>
    </>
  )
}