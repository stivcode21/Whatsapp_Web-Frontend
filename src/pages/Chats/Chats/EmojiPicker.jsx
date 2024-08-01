import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

export default function EmojiPicker({ onSelect }) {

    return (
        <div className="absolute bottom-[65px] left-[10px]">
            <Picker data={data} onEmojiSelect={onSelect} className="bg-blue-dark"/>
        </div>
    )
}