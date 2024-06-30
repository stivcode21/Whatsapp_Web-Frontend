import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const ChatList = ({ list }) => {
  return (
    <List className="bg-blue-dark">
      {list.map((chat, index) => (
        <ListItem key={index}>
          <div className="flex w-full gap-2 relative py-2">
            <Stack>
              <Avatar src={chat.PhotoUser}></Avatar>
            </Stack>
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
  );
};

export default ChatList;
