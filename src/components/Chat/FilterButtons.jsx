import { Box } from "@mui/material";
import Select from "./Select";

export default function FilterButtons({ onChange, formRef}) {
  return (
    <Box className="ps-4 py-3">
      <form className="flex gap-4" onChange={onChange} ref={formRef}>
        <Select value="all">Todos</Select>
        <Select value="unread">No leídos</Select>
        <Select value="group">Grupos</Select>
      </form>
    </Box>
  )
}