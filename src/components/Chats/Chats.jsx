import ChatList from "./ChatList";
import ChatHeader from "./ChatHeader";
import FilterButtons from "./FilterButtons";
import data from "../../database/chats.json";
import NoChats from "./NoChats";
import { useState, useMemo, useRef } from "react";

export default function Chats({ onSelect }) {
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
      <div className="w-4/12 h-screen flex flex-col border-r-[1px] border-grey-main">
        <ChatHeader>
          <FilterButtons handleClick={handleClick} formRef={formRef} />
        </ChatHeader>
        {
          visibleList.length > 0
            ? <ChatList list={visibleList} onSelect={onSelect} />
            : <NoChats filter={filter} handleClick={handleClick} />
        }
      </div>
  );
}