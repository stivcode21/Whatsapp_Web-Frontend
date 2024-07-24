import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";
import { Box } from '@mui/material';
import FooterPriv from "./FooterPriv"

const ChatList = ({ list, onSelect }) => {
  return (
    <section className="bg-blue-black flex flex-col flex-1 justify-between overflow-y-auto">
      <List>
        {list.map((chat, index) => (
          <ListItem key={index} className="hover:bg-blue-dark" onClick={() => onSelect(index)}>
            <div className="flex w-full gap-2 relative py-2 cursor-pointer">
              <Box className="relative flex items-center">
                <Avatar src={chat.photo} />
                <div className={`${chat.isActive ? "bg-green-main" : "bg-red-main"} w-3 h-3 absolute right-0.5 bottom-0.5 rounded-full border-2 border-white`}></div>
              </Box>
              <div>
                <div className="flex justify-between">
                  <h3 className="text-grey-light font-medium">{chat.nameUser}</h3>
                  <span className="absolute right-0 text-grey-medium text-sm">
                    {chat.LastTime_Message}
                  </span>
                </div>
                <div className="flex items-center">
                  <DoneAllOutlinedIcon className={chat.unread ? "text-grey-medium" : "text-blue-main"} size={"1.5rem"} />
                  <span className="text-grey-medium">
                    {chat.LastContent_Message}
                  </span>
                </div>
              </div>
            </div>
          </ListItem>
        ))}
      </List>
      <FooterPriv />
    </section>
  );
};

export default ChatList;
