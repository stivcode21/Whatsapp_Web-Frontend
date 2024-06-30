import { BsCheckAll } from "react-icons/bs";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const ChatList = ({ list }) => {
  return (
    <List className="bg-clr-bg">
      {list.map((chat, index) => (
        <ListItem key={index}>
          <div className="flex w-full gap-2 relative py-2">
            <Stack>
              <Avatar src={chat.PhotoUser}></Avatar>
            </Stack>
            <div>
              <div className="flex justify-between">
                <h3 className="text-white font-medium">{chat.nameUser}</h3>
                <span className="absolute right-0 text-clr-secondary text-sm">
                  {chat.LastTime_Message}
                </span>
              </div>
              <div className="flex items-center">
                <BsCheckAll className={chat.unread ? "text-clr-secondary" : "text-read-message-icon"} size={"1.5rem"} />
                <span className="text-clr-secondary">
                  {chat.LastContent_Message}
                </span>
              </div>
            </div>
          </div>
        </ListItem>
      ))}
    </List>
  );
};

export default ChatList;
