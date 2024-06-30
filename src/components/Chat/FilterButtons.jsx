import { Box} from "@mui/material";
import Select from "./Select";

export default function FilterButtons() {
  return (
    <Box className="ps-4 pt-4">
      <form className="flex gap-4">
        <Select name="filter">Todos</Select>
        <Select name="filter">No leídos</Select>
        <Select name="filter">Grupos</Select>
      </form>
    </Box>
  )
}