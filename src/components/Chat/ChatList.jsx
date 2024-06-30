import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";
import { Box } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const ChatList = ({ list }) => {
  return (
    <List className="bg-blue-dark">
      {list.map((chat, index) => (
        <ListItem key={index}>
          <div className="flex w-full gap-2 relative py-2">
            <Box className="relative flex items-center">
              <Avatar src={chat.PhotoUser} />
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
      <footer className="bg-blue-dark flex px-5 justify-center pb-5">
        <LockOutlinedIcon sx={{color: "grey.medium"}}/>
        <p className="text-grey-medium text-center">
          Tus mensajes personales están{" "}
          <span className="text-green-main">
            cifrados de extremo a extremo.
          </span>
        </p>
      </footer>
    </List>
  );
};

export default ChatList;
