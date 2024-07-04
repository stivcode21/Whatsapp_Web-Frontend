import { Box } from "@mui/material";
import Select from "./Select";

export default function FilterButtons({ handleClick, formRef }) {
  return (
    <Box className="ps-4 py-3">
      <form className="flex gap-4" onClick={handleClick} ref={formRef}>
        <Select value="all">Todos</Select>
        <Select value="unread">No leídos</Select>
        <Select value="group">Grupos</Select>
      </form>
    </Box>
  )
}