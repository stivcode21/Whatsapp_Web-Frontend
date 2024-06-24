import { Button } from "@mui/material"

export const WelcomePage = () => {
    return (
        <div className="bg-clr-bg px-6">
            <div className="container mx-auto flex flex-col items-center justify-center h-screen text-clr-main text-center gap-5">

                <header className="">
                    <img className="w-[15rem] mb-4" src="/assets/graphic-first-screen.png" alt="Imagen de portada de la pagina" />
                    <h1 className="text-lg">Añade una cuenta</h1>
                </header>

                <main className="text-balance max-w-md">
                    <p className="text-sm text-clr-secondary">
                        Si te registras, aceptas la <a href="#" className="text-clr-primary">Política de privacidad</a> y las <a href="#" className="text-clr-primary">Condiciones del servicio</a> de WhatsApp.
                        Usamos tu información para crear tu cuenta, prestar
                        nuestros servicios y ayudar a mantener WhatsApp
                        seguro y protegido. En los ajustes, puedes acceder a la
                        información de tu cuenta, administrarla y eliminarla. <a href="#" className="text-clr-primary"> Más
                            información</a>
                    </p>

                    <Button sx={{ mt: '1.25rem', color: 'dark.main' }} variant="contained" backgroundColor="primary" size="small">
                        Aceptar y continuar
                    </Button>
                </main>
            </div>
        </div>

    )
}
