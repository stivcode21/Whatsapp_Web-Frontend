import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { Box, IconButton, TextField } from '@mui/material';
import { Button } from "@mui/material"

import EmailIcon from '@mui/icons-material/Email';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';


export const AuthLogin = () => {
    return (
        <div className="bg-clr-bg">
            <div className="container h-screen mx-auto">
                <header className="h-20 flex justify-between items-center px-6">
                    <IconButton>
                        <ArrowBackOutlinedIcon sx={{ fontSize: 32 }} />
                    </IconButton>

                    <h1 className='text-2xl text-clr-main'>Ingresa su Email</h1>

                    <IconButton>
                        <MoreVertOutlinedIcon sx={{ fontSize: 32 }} />
                    </IconButton>
                </header>

                <main className="text-center text-balance px-6">
                    <p className="text-balance text-sm text-clr-secondary text-center mx-auto">
                        WhatsApp necesita verificar tu Email (es posible que tu operador aplique cargos.)
                        <a href="#" className="text-clr-primary"> ¿Cual es mi Email?</a>
                    </p>

                    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                            <EmailIcon posi sx={{ color: '#0BA884', mr: 1 }} />
                            <TextField
                                type='email'
                                id="email"
                                label="Email"
                                required
                                variant="standard"
                                sx={{ marginTop: 5, width: '100%', maxWidth: 300 }} />
                        </Box>

                        <Button type='submit' sx={{ mt: '1.25rem', color: 'dark.main', padding: 1, marginTop: 2 }} variant="contained" backgroundColor="primary" size="small">
                            Siguiente
                        </Button>

                    </Box>
                </main>
            </div>
        </div>
    )
}
