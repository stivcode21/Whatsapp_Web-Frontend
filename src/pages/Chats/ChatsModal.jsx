export default function ChatsModal() {
  return (
    <div className="w-[260px]">
      <div className="px-[24px] h-10 flex items-center hover:bg-blue-black cursor-pointer">
        <p>Nuevo grupo</p>
      </div>
      <div className="px-[24px] h-10 flex items-center hover:bg-blue-black cursor-pointer">
        <p>Archivados</p>
      </div>
      <div className="px-[24px] h-10 flex items-center hover:bg-blue-black cursor-pointer">
        <p>Mensjaes destacados</p>
      </div>
      <div className="px-[24px] h-10 flex items-center hover:bg-blue-black cursor-pointer">
        <p>Seleccionar chats</p>
      </div>
      <div className="px-[24px] h-10 flex items-center hover:bg-blue-black cursor-pointer">
        <p>Cerrar sesión</p>
      </div>
    </div>
  )
}