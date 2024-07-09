import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import { Button } from "@mui/material"

import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const AuthLogin = () => {


    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    

    function handleSubmit(e) {
        e.preventDefault()
        console.log('Se guardo el email escrito por el usuario')
    }
    // ipconfig

    return (
        <div className="bg-blue-dark h-screen flex">
            {/* Formulario Login */}
            <section className='flex-1 px-6 self-center'>
                <Box component='form' onSubmit={handleSubmit} className='text-center w-full max-w-sm mx-auto'>
                    <h1 className='text-grey-light text-2xl'>Crea o ingresa a tu cuenta</h1>
                    <p className='text-sm text-grey-medium mt-2 mb-10'>
                        Solo necesitamos unos cuantos datos
                    </p>
                    
                    <Box className='flex gap-4 flex-col'>


                    {/* INPUT EMAIL */}
                    <TextField
                        
                        id="email"
                        placeholder="example@gmail.com"
                        variant="outlined"
                        type='email'
                        autoComplete="off"
                        required

                        InputProps= {{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailOutlinedIcon sx={{color: 'green.main'}} fontSize='small' />
                                </InputAdornment>
                              ),
                        }}


                        inputProps={{
                            sx: {
                                color: 'grey.light'
                            }  
                        }}

                        sx={{
                            width: '100%',
                            '& .MuiInputBase-input::placeholder': {
                                color: 'grey.medium',
                            },
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '16px',
                                height: '3rem',
                                '& fieldset': {
                                    borderColor: 'green.700',
                                },
                                '&:hover fieldset , &.Mui-focused fieldset': {
                                    borderColor: 'green.main',
                                }
                            },
                        }} />

                        {/* PASSWORD BUTTON */}
                        <TextField
                        
                        id="password"
                        placeholder="Input password"
                        variant="outlined"
                        type= {showPassword ? 'password' : 'text'}
                        autoComplete="off"
                        required

                        InputProps= {{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockOutlinedIcon sx={{color: 'green.main'}} fontSize='small' />
                                </InputAdornment>
                              ),

                            endAdornment: (
                                <InputAdornment position='end'>
                                    <IconButton
                                        onClick={handleTogglePasswordVisibility}
                                        position="end"
                                        >
                                        {showPassword ? (
                                            <VisibilityOffOutlinedIcon sx={{ color: 'green.main' }} fontSize="small" />
                                        ) : (
                                            <VisibilityOutlinedIcon sx={{ color: 'green.main' }} fontSize="small" />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}


                        inputProps={{
                            sx: {
                                color: 'grey.light'
                            }  
                        }}

                        sx={{
                            width: '100%',
                            '& .MuiInputBase-input::placeholder': {
                                color: 'grey.medium',
                            },
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '16px',
                                height: '3rem',
                                '& fieldset': {
                                    borderColor: 'green.700',
                                },
                                '&:hover fieldset , &.Mui-focused fieldset': {
                                    borderColor: 'green.main',
                                }
                            },
                        }} />
                    
                    </Box>


                    {/* BUTTON */}
                    <div className='flex justify-end'>
                        <Button type="submit" variant="text" sx={{ mt: 10, color: 'grey.light'}} size="small" endIcon={<ArrowForwardOutlinedIcon sx={{color: 'green.main'}} />}>
                            <Link to='/verification'>
                                Continuar
                            </Link>
                        </Button>
                    </div>
                </Box>



            </section>

            {/* Imagen grafica */}
            <section className='flex-1 bg-blue-black hidden md:flex items-center justify-center'> 
                <img className='px-6 w-full max-w-96' src="../../assets/graphic-first-screen.png" alt="Imagen grafica de la aplicacion" />
            </section>
        </div>
    )
}

