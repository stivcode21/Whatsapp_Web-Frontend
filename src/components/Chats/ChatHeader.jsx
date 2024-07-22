import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Box } from "@mui/material";

const ChatHeader = ({ children }) => {
  return (
    <section className="bg-blue-black border-grey-medium">
      <Box className="flex items-center justify-between px-4 h-14">
        <h1 className="text-white font-semibold text-xl">Chats</h1>
        <div className="flex gap-5">
          <PhotoCameraOutlinedIcon sx={{ color: "grey.medium" }} size={"1.25rem"} />
          <SearchOutlinedIcon sx={{ color: "grey.medium" }} size={"1.25rem"} />
          <MoreVertOutlinedIcon
            sx={{ color: "grey.medium" }}
            size={"1.25rem"}
          />
        </div>
      </Box>
      {children}
    </section>
  );
};

export default ChatHeader;