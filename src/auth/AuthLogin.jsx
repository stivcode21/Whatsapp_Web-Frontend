import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { Box, IconButton,  TextField } from '@mui/material';
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

                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <EmailIcon posi sx={{ color: '#0BA884', mr: 1, my: 2.5, marginTop: 8 }} />


                        <TextField
                        id="input-with-sx" 
                        label="Email" 
                        variant="standard" 
                        sx={{marginTop: 5,  width: '100%', maxWidth: 300}}/> 
                        
                    </Box>

                    <Button sx={{mt: '1.25rem', color: 'dark.main',  padding: 1, marginTop: 2}} variant="contained" backgroundColor="primary" size="small">
                        Siguiente
                    </Button>

                </main>
            </div>
        </div>
    )
}
