import ChatList from "./ChatList";
import { CiLock } from "react-icons/ci";
import ChatHeader from "./ChatHeader";

const Chat = () => {
  return (
    <>
      <ChatHeader />
      <ChatList />
      <footer className="bg-clr-bg flex px-5 justify-center pb-5">
        <CiLock className="text-clr-secondary" />
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
