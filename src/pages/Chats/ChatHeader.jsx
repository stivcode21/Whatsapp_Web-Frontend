import { AddComment, MoreVert } from "@mui/icons-material";
import Options from "../../components/Options";

export default function ChatHeader({ children }) {
  return (
    <header className="bg-blue-black border-grey-medium">
      <div className="flex items-center justify-between pl-[25px] pr-[20px] h-[60px]">
        <h1 className="text-white font-semibold text-2xl">Chats</h1>
        <div className="flex items-center gap-5 text-grey-light">
          <AddComment />
          <Options
            id="chats-config"
            url="../pages/Chats/ChatsModal"
          >
            <MoreVert />
          </Options>
        </div>
      </div>
      {children}
    </header>
  );
}