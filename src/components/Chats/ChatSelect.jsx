import { Avatar } from "@mui/material";

import { Videocam, Search, MoreVert, EmojiEmotionsOutlined, Add, KeyboardVoice } from "@mui/icons-material";
import dataMessages from "../../database/messages.json"
import { useRef, useState } from "react";
import Button from "../Common/Button";
import EmojiPicker from "./EmojiPicker";
import FooterPriv from "./FooterPriv";

function ChatMessage({ message }) {
  return (
    <div className={`${message.wasSendByMe ? "justify-end" : ""} flex text-white`}>
      <div className={
        `${message.wasSendByMe ? "bg-green-500" : "bg-grey-main"} 
        py-2 px-4 rounded-lg gap-2 max-w-[500px]`
      }>
        <p className="break-words text-sm">
          {message.content}
          <span className="text-xs ml-[10px]">
            {message.time}
          </span>
        </p>
      </div>
    </div>
  )
}

function ChatSelectHeader({ user }) {
  return (
    <header className="bg-blue-dark py-[10px] px-[16px] flex items-center">
      <div className="pr-[15px]">
        <Avatar src={user.photo} />
      </div>
      <div className="flex-1">
        <p className="text-white font-bold">{user.nameUser}</p>
      </div>
      <div className="text-grey-light ml-[20px] flex gap-5">
        <Videocam className="cursor-pointer" />
        <Search className="cursor-pointer" />
        <MoreVert className="cursor-pointer" />
      </div>
    </header>
  )
}

function formatTime() {
  const date = new Date()
  let hours = date.getHours()
  const minutes = date.getMinutes()

  let result = ""

  if (hours > 12) {
    hours = hours - 12
    result = hours + ":" + minutes + " p.m"
  } else {
    result = hours + ":" + minutes + " a.m"
  }

  return result
}

export default function ChatSelect({ user }) {
  const [messages, setMessages] = useState(dataMessages)
  const [showPicker, setShowPicker] = useState(false)

  const inputRef = useRef(null)

  function handleSelect(e) {
    const start = inputRef.current.selectionStart
    const end = inputRef.current.selectionEnd

    const emoji = e.native
    const text = inputRef.current.value

    const before = text.slice(0, start)
    const after = text.slice(end)

    inputRef.current.value = before + emoji + after
    inputRef.current.selectionStart = before.length + emoji.length
    inputRef.current.selectionEnd = before.length + emoji.length
    inputRef.current.focus()
  }

  function handleSubmit(event) {
    event.preventDefault()

    let { message } = Object.fromEntries(new FormData(event.target))
    message = message.trim()

    if (message.length > 0) {
      let newMessages = [...messages, {
        "id": self.crypto.randomUUID(),
        "content": message,
        "time": formatTime(),
        "wasSendByMe": true,
        "isRead": false
      }]
  
      setMessages(newMessages)
      setShowPicker(false)
      inputRef.current.value = ""
    }

  }

  if (user === undefined) {
    return (
      <section className="bg-blue-dark h-screen flex flex-col justify-center items-center text-white">
        <img src="../../assets/whatsapp-bg.png" alt="Welcome to WhatsApp" className="w-[400px]"></img>
        <h1 className="text-3xl mt-[20px]"> WhatsApp Web</h1>
        <p className="text-grey-medium mb-20 mt-[5px]">
          Envía y recibe mensajes sin necesidad de tener tu teléfono conectado. <br />
          Usa WhatsApp en hasta 4 dispositivos vinculados y 1 teléfono a la vez.
        </p>
        <FooterPriv />
      </section>
    )
  }

  return (
    <section className="bg-blue-black h-screen flex flex-col relative">
      <ChatSelectHeader user={user} />
      <main className="flex flex-col flex-1 overflow-y-auto px-[60px] py-[10px] gap-1">
        {
          messages.map(message => <ChatMessage message={message} key={message.id} />)
        }
      </main>
      {
        showPicker ? <EmojiPicker onSelect={handleSelect} /> : ""
      }
      <footer className="bg-[#202c33] py-3 px-8 flex items-center gap-4">
        <div className="text-grey-light flex gap-4">
          <Button onClick={() => {
            setShowPicker(!showPicker)
            inputRef.current.focus()
          }}>
            <EmojiEmotionsOutlined className="cursor-pointer" />
          </Button>
          <Add className="cursor-pointer" />
        </div>
        <form className="flex-1 mx-[8px] my-[5px]" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            name="message"
            className="w-full py-[9px] px-[12px] bg-grey-main rounded-lg outline-none text-white"
            placeholder="Escribe un mensaje"
            autoComplete="off"
          />
        </form>
        <div className="text-grey-light">
          <KeyboardVoice className="cursor-pointer" />
        </div>
      </footer>
    </section>
  )
}