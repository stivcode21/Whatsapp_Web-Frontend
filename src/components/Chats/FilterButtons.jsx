import { Box } from "@mui/material";
import { SelectFilter } from "./Select";

export default function FilterButtons({ handleClick, formRef }) {
  return (
    <Box className="ps-4 py-3">
      <form className="flex gap-4" onClick={handleClick} ref={formRef}>
        <SelectFilter value="all" name="filter" isDefault={true}>Todos</SelectFilter>
        <SelectFilter value="unread" name="filter">No leídos</SelectFilter>
        <SelectFilter value="group" name="filter">Grupos</SelectFilter>
      </form>
    </Box>
  )
}