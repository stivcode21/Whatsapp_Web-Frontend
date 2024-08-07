import { SelectFilter } from "./Select";

export default function FilterButtons({ handleClick, formRef }) {
  return (
    <div className="ps-4 py-3">
      <form className="flex gap-4" onClick={handleClick} ref={formRef}>
        <SelectFilter value="all" name="filter" isDefault={true} id="all">Todos</SelectFilter>
        <SelectFilter value="unread" name="filter" id="unread">No leídos</SelectFilter>
        <SelectFilter value="group" name="filter" id="group">Grupos</SelectFilter>
      </form>
    </div>
  )
}