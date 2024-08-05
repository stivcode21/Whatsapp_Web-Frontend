import { useAuth } from "../../hooks/useAuth"
import Avatar from "../../components/Avatar"

export default function Profile() {
  const { user } = useAuth()
  const { name, email, description } = user

  return(
    <div className="h-full flex flex-col">
      <header className="h-[60px] px-5 flex items-center">
        <h1 className="text-2xl font-bold text-[white]"> Perfil </h1>
      </header>
      <div className="flex flex-col flex-1">
        <div className="my-7">
          <Avatar className="size-[200px] mx-auto"/>
        </div>
        <form className="px-[30px] flex flex-col">
          <label htmlFor="name" className="p-[14px 0 10px] text-grey-light mb-[10px]">
            <span className="text-[14px] font-normal mb-[15px] text-green-main">Nombre</span>
            <div>
              <div id="name" name="name" role="textarea" className="text-[16px] font-normal">
                { name }
              </div>
            </div>
          </label>

          <label htmlFor="name" className="p-[14px 0 10px] text-grey-light mb-[10px]">
            <span className="text-[14px] font-normal mb-[15px] text-green-main">Descripción</span>
            <div>
              <div id="name" name="name" role="textarea" className="text-[16px] font-normal">
                { description }
              </div>
            </div>
          </label>

          <label htmlFor="name" className="p-[14px 0 10px] text-grey-light mb-[10px]">
            <span className="text-[14px] font-normal mb-[15px] text-green-main">Correo electrónico</span>
            <div>
              <div id="name" name="name" role="textarea" className="text-[16px] font-normal">
                { email }
              </div>
            </div>
          </label>
        </form>
      </div>
    </div>
  )
}