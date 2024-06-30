import { Box } from "@mui/material";
import Select from "./Select";

export default function FilterButtons({ onChange }) {
  return (
    <Box className="ps-4 pt-4">
      <form className="flex gap-4" onChange={onChange}>
        <Select name="filter" value="all" checked={true}>Todos</Select>
        <Select name="filter" value="unread">No leídos</Select>
        <Select name="filter" value="group">Grupos</Select>
      </form>
    </Box>
  )
}