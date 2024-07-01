import ChatList from "./ChatList";
import ChatHeader from "./ChatHeader";
import FilterButtons from "./FilterButtons";
import data from "../../database/chats.json";
import NoChats from "./NoChats";

import { useState, useMemo } from "react";

export default function Chat() {
  const [filter, setFilter] = useState("all")

  const handleChange = (event) => {
    const currentFilter = event.target.value
    setFilter(currentFilter)
  }

  const visibleList = useMemo(() => {
    if (filter === "all") return data
    return data.filter(chat => chat[filter] === true)
  }, [filter])

  return (
    <section className="grid grid-rows-[auto_1fr] h-screen">
      <ChatHeader>
        <FilterButtons onChange={handleChange} />
      </ChatHeader>
      {
        visibleList.length > 0
          ? <ChatList list={visibleList} />
          : <NoChats filter={filter} onClick={setFilter}/>
      }
    </section>
  );
}