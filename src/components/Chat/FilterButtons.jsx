import { Box} from "@mui/material";
import Select from "./Select";

export default function FilterButtons() {
  const handleChange = (event) => {
    console.log(event.target)
  }

  return (
    <Box className="ps-4 pt-4">
      <form className="flex gap-4" onChange={handleChange}>
        <Select name="filter" value="all">Todos</Select>
        <Select name="filter" value="unread">No leídos</Select>
        <Select name="filter" value="groups">Grupos</Select>
      </form>
    </Box>
  )
}