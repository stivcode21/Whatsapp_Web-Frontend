import Input from "../../components/Input";
import useForm from "../../hooks/userForm";

export default function CreateProfile() {
  const { handleSubmit } = useForm(["image", "text", "text"])
  return (
    <div className="h-screen bg-blue-black items-center">
      <header className="flex flex-col items-center pt-20 pb-8">
        <h1 className="text-3xl text-white font-bold">Crea tu perfil</h1>
        <p className="block text-gray-500 pt-3">Elige como te veran tus contactos.</p>
      </header>
      <form
        onSubmit={(event) => handleSubmit(event, "create-profile", "POST")}
        className="flex flex-col w-[350px] items-center mx-w-md mx-auto"
      >
        <Input 
          type="image"
          name="image"
          id="image"
        />
        <Input
          type="text"
          name="name"
          id="name"
          icon="name"
          placeholder="Nombre"
        />
        <Input
          type="text"
          name="info"
          id="info"
          icon="info"
          placeholder="Descripción"
        />
        <button>Enviar</button>
      </form>
    </div>
  );
}
