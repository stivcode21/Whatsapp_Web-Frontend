import ChatList from "./ChatList";
import ChatHeader from "./ChatHeader";
import FilterButtons from "./FilterButtons";
import InputSearch from "../../components/InputSearch"

export default function Chats() {
  return (
      <div className="flex flex-col h-full">
        <ChatHeader>
            <form className="flex">
              <InputSearch
                name="chats"
                placeholder="Buscar" 
              />
            </form>
            <FilterButtons />
        </ChatHeader>
        <ul className="flex flex-col flex-1 overflow-y-auto">
          <ChatList />
        </ul>
      </div>
  );
}