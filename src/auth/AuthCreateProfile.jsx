import { useRef, useState } from "react";
import { Button, TextField, Box, IconButton, InputAdornment } from "@mui/material";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import PersonIcon from '@mui/icons-material/Person';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

export const AuthCreateProfile = () => {
  const inputRef = useRef(null);
  const [image, setImage] = useState('');

  const handleImageClick = () => {   // Relacionamos el input con la imagen
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];  // Obtenemos el primer archivo seleccionado
    console.log(file);
    setImage(event.target.files[0]);
  };

  const handleSubmit = (e) => {   // Verificar envio de furmulario
    e.preventDefault();
    console.log("cambios guardos")
  };

  return (
    <>
      <div className="h-screen w-full bg-blue-dark px-6">
        <header className="flex flex-col items-center pt-24">
          <h1 className="text-3xl text-white font-medium">Crea tu perfil</h1>
          <p className="block text-gray-500 pt-3">Elige como te veran tus contactos.</p>
        </header>

        <Box component="form" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-center text-clr-main text-center gap-5">
            <div onClick={handleImageClick} className="mt-5 cursor-pointer relative">
              {image ? (
                <img src={URL.createObjectURL(image)} className="border-4 border-grey-light outline outline-green-main outline-2" style={{ margin: 'auto', width: '120px', maxWidth: '300px', height: '120px', maxHeight: '500px', borderRadius: '100%', objectFit: 'cover' }} alt="foto de perfil" />
              ) : (
                <img src="./assets/avatar-placeholder.jpg" className="border-4 border-grey-light outline outline-green-main outline-2" style={{ margin: 'auto', width: '120px', maxWidth: '300px', height: '120px', maxHeight: '500px', borderRadius: '100%', objectFit: 'cover' }} alt="avatar Placeholder" />
              )}
              <input type="file" name="foto" id="foto" accept="image/*" ref={inputRef} onChange={handleImageChange} style={{ display: 'none' }} />
              <IconButton className="absolute bottom-7 left-9 ">
                <CreateOutlinedIcon className="absolute bg-gray-50 rounded-full p-1.5 text-green-main hover:bg-grey-light" fontSize="large" />
              </IconButton>
            </div>



            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <TextField
                id="TuNombre"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon fontSize="small" sx={{ color: 'green.main' }} />
                    </InputAdornment>
                  ),
                }}
                placeholder="Tu Nombre"
                variant="outlined"
                required
                autoComplete="off"
                inputProps={{
                  sx: {
                    color: 'grey.light',
                  }
                }}
                className="outline-green-main"
                sx={{
                  width: '350px',
                  maxWidth: 350,
                  '& .MuiInputBase-input::placeholder': {
                    color: 'grey.medium',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'green.300',
                    },
                    '&:hover fieldset': {
                      borderColor: 'green.main',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'green.main',
                    },
                  },
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <TextField
                id="TuNombre"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <InfoOutlinedIcon color="green" fontSize="small" />
                    </InputAdornment>
                  ),
                }}
                placeholder="¡Hola! Estoy usando WhatsApp."
                variant="outlined"
                autoComplete="off"
                required
                inputProps={{
                  sx: {
                    color: 'grey.light'
                  }
                }}
                sx={{
                  width: '350px',
                  maxWidth: 350,
                  '& .MuiInputBase-input::placeholder': {
                    color: 'grey.medium',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'green.300',
                    },
                    '&:hover fieldset': {
                      borderColor: 'green.main',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'green.main',
                    },
                  },
                }} />
            </Box>



            <div className="w-80 px-0 pt-10 flex justify-between">
              <Button variant="text" sx={{ mt: 3, color: 'gray' }} size="small" startIcon={<ArrowBackOutlinedIcon color="green" />}>
                Regresar
              </Button>

              <Button type="submit" variant="text" sx={{ mt: 3, color: 'grey.light' }} size="small" endIcon={<ArrowForwardOutlinedIcon color="green" />}>
                Continuar
              </Button>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};