import Input from '../../components/Input';
import useForm from '../../hooks/userForm';
import { useState } from 'react';
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material/"


export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const { handleSubmit } = useForm(["email", "password"])

    function handleClick() {
        setShowPassword(!showPassword)
    }
    
    return (
        <div className="bg-blue-dark h-screen flex">
            <section className='flex flex-1 items-center justify-center'>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col text-center w-full max-w-sm"
                >
                    <h1 className='text-grey-light text-2xl text-'>
                        Iniciar Sesión
                    </h1>
                    <p className='text-sm text-grey-medium mt-2 mb-10'>
                        Solo necesitamos unos cuantos datos
                    </p>
                    <Input
                        type="text"
                        name="email"
                        id="email"
                        icon="email"
                        placeholder="Correo electrónico"
                    />
                    <Input
                        type={!showPassword ? "password" : "text"}
                        name="password"
                        id="password"
                        icon="password"
                        placeholder="Contraseña"
                    >
                        <div className="cursor-pointer" onClick={handleClick}>
                            {
                                showPassword
                                ? <VisibilityOffOutlined />
                                : <VisibilityOutlined />
                            }
                        </div>
                    </Input>
                    <button className="mt-8 text-grey-light">
                        Enviar
                    </button>
                </form>
            </section>
            <section className='flex-1 bg-blue-black hidden md:flex items-center justify-center'> 
                <img className='px-6 w-full max-w-96' src="../../assets/graphic-first-screen.png" alt="Imagen grafica de la aplicacion" />
            </section>
        </div>
    )
}

