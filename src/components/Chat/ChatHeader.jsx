import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Box, Divider } from "@mui/material";

const ChatHeader = ({ children }) => {
  return (
    <section className="bg-clr-bg">
      <Box className="flex items-center justify-between px-4 h-14">
        <h1 className="text-white font-semibold text-xl">WhatsApp</h1>
        <div className="flex gap-5">
          <PhotoCameraOutlinedIcon fill="white" size={"1.25rem"} />
          <SearchOutlinedIcon fill="white" size={"1.25rem"} />
          <MoreVertOutlinedIcon
            fill="white"
            style={{ transform: "rotate(90deg)" }}
            size={"1.25rem"}
          />
        </div>
      </Box>
      <Divider className="bg-clr-divider" />
      {children}
    </section>
  );
};

export default ChatHeader;
