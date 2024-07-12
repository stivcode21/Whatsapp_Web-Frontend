const messageMap = {
  all: "No hay chats",
  unread: "No hay chats no leídos",
  group: "No hay grupos"
}

export default function NoChats({ filter, handleClick }) {
  return (
    <section className="bg-blue-black text-grey-medium text-center flex flex-col justify-center">
      <p>{ messageMap[filter] }</p>
      {
        <p className="text-green-main cursor-pointer" onClick={handleClick}> 
          Ver todos los chats 
        </p>
      }
    </section>
  )
}