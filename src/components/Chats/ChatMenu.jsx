import { ChatOutlined, Groups, SettingsOutlined } from "@mui/icons-material"
import Button from "../Common/Button"
import { Avatar } from "@mui/material"

export default function ChatMenu() {
  return(
    <div className="bg-blue-dark w-[60px] border-r-[1px] border-grey-main flex flex-col justify-between  items-center py-6 text-grey-light">
      <div className="flex flex-col gap-4">
        <Button>
          <ChatOutlined />
        </Button>
        <Button>
          <Groups />
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        <Button>
          <SettingsOutlined />
        </Button>
        <Button>
          <Avatar />
        </Button>
      </div>
    </div>
  )
}