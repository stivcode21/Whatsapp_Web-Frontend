export default function ChatHeader({ children }) {
  return (
    <section className="bg-blue-black border-grey-medium">
      <div className="flex items-center justify-between pl-[25px] pr-[20px] h-[60px]">
        <h1 className="text-white font-semibold text-2xl">Chats</h1>
        <div className="flex gap-5 text-grey-medium">
        </div>
      </div>
      {children}
    </section>
  );
}