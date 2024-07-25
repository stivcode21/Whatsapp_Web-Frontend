import { Avatar } from "@mui/material";
import useFormProfile from "../../hooks/useFormProfile";
import Input from "./Input";

export default function Profile() {
  const {profileData, formRef, handleEdit } = useFormProfile()

  return (
    <>
      <header className="pl-[25px] pr-[20px] h-[60px] flex items-center">
        <h1 className="text-white font-semibold text-2xl"> Perfil </h1>
      </header>
      <div className="my-[28px] flex justify-center">
        <Avatar
          sx={{ width: 200, height: 200 }}
          src="../../assets/McLovin.jpg"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} ref={formRef}>
        <Input
          text="Tu nombre"
          defaultValue={profileData.name}
          name="name"
          onEdit={handleEdit}
        />
        <div className="px-[30px] text-sm text-grey-medium font-light">
          <p>Este no es tu nombre de usuario o PIN. Este nombre será visible para tus contactos de WhatsApp.</p>
        </div>
        <Input
          text="Info."
          defaultValue={profileData.description}
          name="description"
          onEdit={handleEdit}
        />
      </form>
    </>
  )
}