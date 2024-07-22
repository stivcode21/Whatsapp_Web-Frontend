import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Box } from "@mui/material";

const ChatHeader = ({ children }) => {
  return (
    <section className="bg-blue-black border-grey-medium">
      <Box className="flex items-center justify-between px-4 h-14">
        <h1 className="text-white font-semibold text-2xl">Chats</h1>
        <div className="flex gap-5 text-grey-medium">
          <PhotoCameraOutlinedIcon size={"1.25rem"} />
          <SearchOutlinedIcon size={"1.25rem"} />
          <MoreVertOutlinedIcon size={"1.25rem"} />
        </div>
      </Box>
      {children}
    </section>
  );
};

export default ChatHeader;