import ChatList from "./ChatList";
import ChatHeader from "./ChatHeader";
import FilterButtons from "./FilterButtons";
import data from "../../database/chats.json";
import NoChats from "./NoChats";
import { useState, useMemo, useRef } from "react";

export default function Chat() {
  const [filter, setFilter] = useState("all")

  const formRef = useRef(null)

  const handleChange = (event) => {
    let currentFilter

    if(event.target.tagName === "INPUT") {
      currentFilter = event.target.value
      event.target.checked = true
      setFilter(currentFilter)
    }else {
      formRef.current.children[0].firstElementChild.checked = true
      currentFilter = "all"
      setFilter(currentFilter)
    }
  }

  const visibleList = useMemo(() => {
    if (filter === "all") return data
    return data.filter(chat => chat[filter] === true)
  }, [filter])

  return (
    <section className="grid grid-rows-[auto_1fr] h-screen">
      <ChatHeader>
        <FilterButtons onChange={handleChange} formRef={formRef}/>
      </ChatHeader>
      {
        visibleList.length > 0
          ? <ChatList list={visibleList}/>
          : <NoChats filter={filter} onClick={handleChange}/>
      }
    </section>
  );
}