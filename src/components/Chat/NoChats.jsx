const messageMap = {
  all: "No hay chats",
  unread: "No hay chats no leídos",
  group: "No hay grupos"
}

export default function NoChats({ filter, onClick }) {
  return (
    <section className="bg-blue-dark text-grey-medium text-center flex flex-col justify-center">
      <p>{ messageMap[filter] }</p>
      {
        filter === "all" 
          ? "" : 
          <p className="text-green-main cursor-pointer" onClick={() => onClick("all")}> 
            Ver todos los chats 
          </p>
      }
    </section>
  )
}