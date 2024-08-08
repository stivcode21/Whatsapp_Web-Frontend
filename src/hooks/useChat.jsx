import { createContext, useContext, useMemo, useRef, useState } from "react";
import initialChats from "../../src/database/chats.json";
import { formatTime } from "../utils/time";

const ChatContext = createContext()

export function ChatProvider({ children }) {
  const [chats] = useState(initialChats)
  const [filter, setFilter] = useState("all")
  const [currentChat, setCurrentChat] = useState(null)
  const [messages, setMessages] = useState(null)
  const [showPicker, setShowPicker] = useState(false); // Estado para controlar la visibilidad del selector de emojis

  const inputRef = useRef(null);

  const formRef = useRef(null)

  function selectChat(id) {
    setCurrentChat(chats[id - 1])
    setMessages(chats[id - 1].messages)
  }

  function selectFilter(event) {
    let currentFilter

    if (event.target.tagName === "INPUT") {
      currentFilter = event.target.value
      event.target.checked = true
    } else {
      formRef.current.children[0].firstElementChild.checked = true
      currentFilter = "all"
    }

    setFilter(currentFilter)
  }

  function handleSendMessage(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    let { message } = Object.fromEntries(new FormData(event.target));
    message = message.trim(); // Eliminar espacios en blanco del mensaje

    if (message.length > 0) {
      let newMessages = [
        ...messages,
        {
          id: self.crypto.randomUUID(),
          content: message,
          time: formatTime(),
          send: true,
          read: false,
        },
      ];

      setMessages(newMessages); // Actualizar el estado de los mensajes
      setShowPicker(false); // Ocultar el selector de emojis
      inputRef.current.value = ""; // Limpiar el input del mensaje
    }
  }

  function handleOpen() {
    setShowPicker(!showPicker);
    inputRef.current.focus();
  }

  function handleSelect(e) {
    const start = inputRef.current.selectionStart;
    const end = inputRef.current.selectionEnd;

    const emoji = e.native;
    const text = inputRef.current.value;

    const before = text.slice(0, start);
    const after = text.slice(end);

    inputRef.current.value = before + emoji + after;
    inputRef.current.selectionStart = before.length + emoji.length;
    inputRef.current.selectionEnd = before.length + emoji.length;
    inputRef.current.focus(); // Enfocar el input después de insertar el emoji
  }

  const filterChats = useMemo(() => {
    if (filter === "all") return chats
    return chats.filter(chat => chat[filter] === true)
  }, [filter, chats])

  return <ChatContext.Provider value={{
    messages,
    chats,
    filterChats,
    currentChat,
    selectChat,
    selectFilter,
    handleSendMessage,
    handleSelect,
    handleOpen,
    setFilter,
    showPicker,
    inputRef,
    filter,
    formRef
  }}>
    { children }
  </ChatContext.Provider>
}

export function useChat() {
  return useContext(ChatContext)
}