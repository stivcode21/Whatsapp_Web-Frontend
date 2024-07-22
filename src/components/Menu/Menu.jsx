import { ChatOutlined, Groups, SettingsOutlined } from "@mui/icons-material"
import { Avatar } from "@mui/material"
import { SelectMenu } from "../Chats/Select"

export default function Menu({ onSelect }) {

  const handleClick = (event) => {
    if (event.target.tagName !== "INPUT") return
    event.target.checked = true
    onSelect(event.target.value)
  }

  return(
    <form 
      className="bg-blue-dark w-[60px] border-r-[1px] border-grey-main flex flex-col justify-between  items-center py-6 text-grey-light"
      onClick={handleClick}
    >
      <div className="flex flex-col gap-2 items-center">
        <SelectMenu value="chats"  name="menu"isDefault={true}>
          <ChatOutlined />
        </SelectMenu>
        <SelectMenu value="communities" name="menu">
          <Groups />
        </SelectMenu>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <SelectMenu value="settings" name="menu">
          <SettingsOutlined />
        </SelectMenu>
        <SelectMenu value="profile" name="menu">
          <Avatar sx={{ width: 30, height: 30 }}/>
        </SelectMenu>
      </div>
    </form>
  )
}