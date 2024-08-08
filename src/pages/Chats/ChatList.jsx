import { DoneAllOutlined } from '@mui/icons-material';
import Avatar from "@mui/material/Avatar";
import { useChat } from '../../hooks/useChat';
import NoChats from "./NoChats"
import FooterPriv from "./FooterPriv"

const ChatList = () => {
  const { filterChats, selectFilter, filter, selectChat, currentChat } = useChat()

  if (filterChats.length <= 0) return <NoChats filter={filter} handleClick={selectFilter} />

  return (
    <>
        {filterChats.map((chat) => (
          <li key={chat.id} className={currentChat?.id === chat.id ? "bg-blue-dark" : "hover:bg-blue-dark"} onClick={() => selectChat(chat.id)}>
            <div className="flex h-[70px] gap-2 relative cursor-pointer text-grey-light">
              <div className="relative flex items-center pl-[13px] pr-[15px]">
                <Avatar sx={{ width: 50, height: 50 }} src={chat.image} />
              </div>
              <div className="flex flex-1 flex-col justify-center border-b-[1px] border-grey-border pr-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-[17px] text-white font-medium">{chat.name}</h3>
                  <p className="text-[12px]">
                    {chat.messages[chat.messages.length - 1].time}
                  </p>
                </div>
                <div className="grid grid-cols-[auto_1fr] items-center gap-2">
                  <DoneAllOutlined className={!chat.messages[chat.messages.length - 1].read ? "text-grey-medium" : "text-blue-main"} fontSize="small" />
                  <p className="w-full text-[14px] truncate">
                    {chat.messages[chat.messages.length - 1].content}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
        <div className="flex flex-1 items-end justify-center">
          <FooterPriv />
        </div>
    </>
  );
};

export default ChatList;