import ChatList from "./ChatList";
import ChatHeader from "./ChatHeader";
import FilterButtons from "./FilterButtons";
import data from "../../database/chats.json";
import NoChats from "./NoChats";
import { useState, useMemo, useRef } from "react";

export default function Chats() {
  const [filter, setFilter] = useState("all")

  const formRef = useRef(null)

  const handleClick = (event) => {
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

  const visibleList = useMemo(() => {
    if (filter === "all") return data
    return data.filter(chat => chat[filter] === true)
  }, [filter])

  return (
      <div className="flex flex-col h-full">
        <ChatHeader>
          <FilterButtons handleClick={handleClick} formRef={formRef} />
        </ChatHeader>
        <ul className="flex-1 overflow-y-auto">
        {
          visibleList.length > 0
            ? <ChatList list={visibleList} />
            : <NoChats filter={filter} handleClick={handleClick} />
        }
        </ul>
      </div>
  );
}