import ChatList from "./ChatList";
import ChatHeader from "./ChatHeader";
import FilterButtons from "./FilterButtons";
import NoChats from "./NoChats";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState, useMemo } from "react";
import data from "../../database/data.json";

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
    <>
      <ChatHeader>
        <FilterButtons onChange={handleChange} />
      </ChatHeader>
      {
        visibleList.length > 0
          ? <ChatList list={visibleList} />
          : <NoChats />
      }
      <footer className="bg-clr-bg flex px-5 justify-center pb-5">
        <LockOutlinedIcon className="text-clr-secondary" />
        <p className="text-clr-secondary text-center">
          Tus mensajes personales están{" "}
          <span className="text-clr-primary">
            cifrados de extremo a extremo.
          </span>
        </p>
      </footer>
    </>
  );
};

export default Chat;
