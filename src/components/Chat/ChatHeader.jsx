import { MdOutlineCameraAlt } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { GoKebabHorizontal } from "react-icons/go";
import Divider from "@mui/material/Divider";
import Box from '@mui/material/Box';

const ChatHeader = () => {
  return (
    <section className="bg-clr-bg">
      <Box className="flex items-center justify-between px-4 h-14">
        <h1 className="text-white font-semibold text-xl">WhatsApp</h1>
        <div className="flex gap-5">
          <MdOutlineCameraAlt fill="white" size={"1.25rem"} />
          <IoSearch fill="white" size={"1.25rem"} />
          <GoKebabHorizontal
            fill="white"
            style={{ transform: "rotate(90deg)" }}
            size={"1.25rem"}
          />
        </div>
      </Box>
      <Divider className="bg-clr-divider" />
    </section>
  );
};

export default ChatHeader;
