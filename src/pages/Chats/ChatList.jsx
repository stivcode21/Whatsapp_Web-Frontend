import { DoneAllOutlined } from '@mui/icons-material';
import Avatar from "@mui/material/Avatar";
import FooterPriv from "./FooterPriv"

/*function Chat() {
  return (

  )
}*/

const ChatList = ({ list }) => {
  return (
    <>
        {list.map((chat, index) => (
          <li key={index} className="hover:bg-blue-dark">
            <div className="flex w-full h-[70px] gap-2 relative cursor-pointer">
              <div className="relative flex items-center pl-[13px] pr-[15px]">
                <Avatar sx={{ width: 50, height: 50 }} src={chat.photo}/>
              </div>
              <div className="w-full flex flex-col justify-center border-b-[1px] border-grey-border">
                <div className="flex justify-between">
                  <h3 className="text-[17px] text-white font-medium">{chat.nameUser}</h3>
                  <span className="absolute right-4 text-grey-medium text-[12px]">
                    {chat.LastTime_Message}
                  </span>
                </div>
                <div className="flex items-center gap-[2px]">
                  <DoneAllOutlined className={chat.unread ? "text-grey-medium" : "text-blue-main"} fontSize="small" />
                  <span className="text-[14px] text-grey-medium">
                    {chat.LastContent_Message}
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      <FooterPriv />
    </>
  );
};

export default ChatList;