import Input from '../../components/Input';
import useForm from '../../hooks/userForm';
import { useState } from 'react';
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material/"
import { useAuth } from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

export default function Login() {
    const [typeForm, setTypeForm] = useState("login")
    const [showPassword, setShowPassword] = useState(false);
    const { handleSubmit } = useForm(["email", "password"])
    const { isAuthenticated } = useAuth()

    if(isAuthenticated) return <Navigate to="/" />

    function handleClickForm() {
        setTypeForm(tf => {
            if(tf === "login") return "register"
            return "login"
        })
    }

    function handleClick() {
      setShowPassword(!showPassword)
    }
    
    return (
        <div className="bg-blue-darker h-screen flex">
            <section className='flex flex-1 items-center justify-center p-6'>
                <form
                    onSubmit={(event) => handleSubmit(event, typeForm, "POST")}
                    className="flex flex-col text-center w-full max-w-sm items-center"
                >
                    <h1 className='text-3xl text-white font-bold'>
                        {
                            typeForm === "login" ? "Iniciar Sesión" : "Crear cuenta"
                        }
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
                    <button className="py-2 px-4 bg-green-dark text-green-main rounded-[5px] w-full" type="submit">
                        Enviar
                    </button>

                    <div className="text-grey-medium mt-9 flex gap-2 text-nowrap flex-wrap justify-center">
                        <span>
                            { typeForm === "login" ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}
                        </span>
                        <button type="button" onClick={handleClickForm} className="text-sm text-green-main underline">
                            { typeForm === "login" ? "crear una cuenta" : "inicia sesión"}
                        </button>
                    </div>
                    
                </form>
            </section>
            <section className='flex-1 bg-blue-black hidden md:flex items-center justify-center'> 
                <img className='px-6 w-full max-w-96' src="../../assets/graphic-first-screen.png" alt="Imagen grafica de la aplicacion" />
            </section>
        </div>
    )
}

