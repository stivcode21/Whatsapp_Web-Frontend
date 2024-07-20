import ChatList from "./ChatList";
import ChatHeader from "./ChatHeader";
import FilterButtons from "./FilterButtons";
import data from "../../database/chats.json";
import NoChats from "./NoChats";
import ChatSelect from "./ChatSelect"
import { useState, useMemo, useRef } from "react";

export default function Chat() {
  const [filter, setFilter] = useState("all")
  const [selectChat, setSelectChat] = useState(undefined)

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
    <section className="flex overflow-hidden">
      <div className="w-2/5 h-screen flex flex-col border-r-2 border-grey-medium">
        <ChatHeader>
          <FilterButtons handleClick={handleClick} formRef={formRef} />
        </ChatHeader>
        {
          visibleList.length > 0
            ? <ChatList list={visibleList} onSelect={setSelectChat} />
            : <NoChats filter={filter} handleClick={handleClick} />
        }
      </div>
      <div className="h-full w-3/5">
        <ChatSelect user={data[selectChat]} />
      </div>
    </section>
  );
}