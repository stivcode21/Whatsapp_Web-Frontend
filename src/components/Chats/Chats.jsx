import ChatList from "./ChatList";
import ChatHeader from "./ChatHeader";
import FilterButtons from "./FilterButtons";
import data from "../../database/chats.json";
import NoChats from "./NoChats";
import ChatSelect from "./ChatSelect"
import { useState, useMemo, useRef } from "react";

export default function Chat() {
  const [filter, setFilter] = useState("all")
  const [selectChat, setSelectChat] = useState()

  console.log(selectChat)

  const formRef = useRef(null)

  const handleClick = (event) => {
    let currentFilter

    if(event.target.tagName === "INPUT") {
      currentFilter = event.target.value
      event.target.checked = true
    }else {
      formRef.current.children[0].firstElementChild.checked = true
      currentFilter = "all"
    }

    setFilter(currentFilter)
  }

  const visibleList = useMemo(() => {
    if (filter === "all") return data
    return data.filter(chat => chat[filter] === true)
  }, [filter])

  if(selectChat !== undefined) return <ChatSelect user={data[selectChat]}/>

  return (
    <section className="grid grid-rows-[auto_1fr] h-screen">
      <ChatHeader>
        <FilterButtons handleClick={handleClick} formRef={formRef}/>
      </ChatHeader>
      {
        visibleList.length > 0
          ? <ChatList list={visibleList} onSelect={setSelectChat}/>
          : <NoChats filter={filter} handleClick={handleClick}/>
      }
    </section>
  );
}