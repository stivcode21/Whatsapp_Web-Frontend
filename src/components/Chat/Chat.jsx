import ChatList from "./ChatList";
import ChatHeader from "./ChatHeader";
import FilterButtons from "./FilterButtons";
import NoChats from "./NoChats";
import { useState, useMemo } from "react";
import data from "../../database/chats.json";

const Chat = () => {
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
    <section className="flex flex-col">
      <ChatHeader>
        <FilterButtons onChange={handleChange} />
      </ChatHeader>
      {
        visibleList.length > 0
          ? <ChatList list={visibleList} />
          : <NoChats />
      }
    </section>
  );
};

export default Chat;
