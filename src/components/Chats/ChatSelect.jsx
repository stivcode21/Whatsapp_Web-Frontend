import { Avatar } from "@mui/material";
import { Videocam, Search, MoreVert, EmojiEmotionsOutlined, Add, KeyboardVoice } from "@mui/icons-material";
import dataMessages from "../../database/messages.json"
import { useState } from "react";

function ChatMessage({ message }) {
  return (
    <div className={`${message.wasSendByMe ? "justify-end" : ""} flex text-white`}>
      <div className={
        `${message.wasSendByMe ? "bg-green-main" : "bg-grey-main"} 
        p-[2px] px-[8px] rounded-lg gap-2 max-w-[500px]`
      }>
        <p>
          {message.content} 
          <span className="text-xs ml-[10px]">
            {message.time}
          </span>
        </p>
      </div>
    </div>
  )
}

function formatTime() {
  const date = new Date()
  let hours = date.getHours()
  const minutes = date.getMinutes()

  let result = ""

  if(hours > 12) {
    hours = hours - 12
    result = hours + ":" + minutes + " p.m"
  }else {
    result = hours + ":" + minutes + " a.m"
  }

  return result
}

export default function ChatSelect({ user }) {
  const [messages, setMessages] = useState(dataMessages)

  const handleSubmit = (event) => {
    event.preventDefault()
    
    const { message } = Object.fromEntries(new FormData(event.target))

    let newMessages = [...messages, {
      "id": self.crypto.randomUUID(),
      "content": message,
      "time": formatTime(),
      "wasSendByMe": true,
      "isRead": false
    }]

    setMessages(newMessages)

    event.target.reset()
  }

  return (
    <section className="bg-blue-dark h-screen flex flex-col">
      <header className="bg-grey-main py-[10px] px-[16px] flex items-center">
        <div className="pr-[15px]">
          <Avatar src={user.PhotoUser}/>
        </div>
        <div className="flex-1">
          <p className="text-white font-bold">{user.nameUser}</p>
        </div>
        <div className="text-grey-light ml-[20px] flex gap-5">
          <Videocam className="cursor-pointer"/>
          <Search className="cursor-pointer"/>
          <MoreVert className="cursor-pointer"/>
        </div>
      </header>
      <main className="flex flex-col flex-1 overflow-y-auto px-[60px] py-[10px] gap-1">
        {
          messages.map(message => <ChatMessage message={message} key={message.id}/>)
        }
      </main>
      <footer className="bg-grey-main py-[5px] px-[16px] flex items-center gap-4">
        <div className="text-grey-light flex gap-4">
          <EmojiEmotionsOutlined className="cursor-pointer"/>
          <Add className="cursor-pointer"/>
        </div>
        <form className="flex-1 mx-[8px] my-[5px]" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="message"
            className="w-full py-[9px] px-[12px] bg-grey-medium rounded-lg outline-none text-white"
            placeholder="Escribe un mensaje"
          />
        </form>
        <div className="text-grey-light">
          <KeyboardVoice />
        </div>
      </footer>
    </section>
  )
}