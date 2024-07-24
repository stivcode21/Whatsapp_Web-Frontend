import { Avatar } from "@mui/material";

export default function Profile() {
  return (
  <>
    <header className="pl-[25px] pr-[20px] h-[60px] flex items-center">
      <h1 className="text-white font-semibold text-2xl"> Perfil </h1>
    </header>
    <div className="my-[28px] flex justify-center">
      <Avatar sx={{ width: 200, height: 200 }} src="../../assets/McLovin.jpg"/>
    </div>
    <div className="px-[30px] pt-[14px] pb-[10px] mb-[10px] font-light">
      <p className="mb-[14px] text-green-main text-sm">Tu nombre</p>
      <p className="text-white">Mc Lovin</p>
    </div>
    <div className="px-[30px] text-sm text-grey-medium font-light">
      <p>Este no es tu nombre de usuario o PIN. Este nombre será visible para tus contactos de WhatsApp.</p>
    </div>
    <div className="px-[30px] pt-[14px] pb-[10px] mb-[10px] font-light">
      <p className="mb-[14px] text-green-main text-sm">Info</p>
      <p className="text-white">A eso le llamo estrategia</p>
    </div>
  </>
  )
}