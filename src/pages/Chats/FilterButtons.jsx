import { useChat } from "../../hooks/useChat";
import { SelectFilter } from "./Select";

export default function FilterButtons() {
  const { selectFilter, formRef, filter } = useChat()
  
  return (
    <div className="ps-4 py-3">
      <form className="flex gap-4" onClick={selectFilter} ref={formRef}>
        <SelectFilter value="all" name="filter" isDefault={filter === "all"} id="all">Todos</SelectFilter>
        <SelectFilter value="unread" name="filter" id="unread" isDefault={filter === "unread"}>No leídos</SelectFilter>
        <SelectFilter value="group" name="filter" id="group" isDefault={filter === "group"}>Grupos</SelectFilter>
      </form>
    </div>
  )
}