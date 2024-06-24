import { useRef, useState } from "react";
import { Button, TextField, Box, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PersonIcon from '@mui/icons-material/Person';

export const AuthRegister = () => {
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
      <div className="h-screen w-full bg-clr-bg">
        <header className="bg-clr-bg  px-6 h-20 flex items-center justify-between">
          <IconButton>
            <ArrowBackIcon sx={{ fontSize: 32 }} />
          </IconButton>
          <h2 className="text-clr-main font-medium text-xl">Registro</h2>
          <IconButton>
            <MoreVertIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </header>

        <Box component="form" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-center text-clr-main text-center gap-5">
            <div onClick={handleImageClick} className="mt-10">
              {image ? (
                <img src={URL.createObjectURL(image)} style={{ margin: 'auto', width: '200px', maxWidth: '300px', height: '200px', maxHeight: '500px', borderRadius: '100%', objectFit: 'cover' }} alt="foto de perfil" />
              ) : (
                <img src="./assets/avatar-placeholder.jpg" style={{ margin: 'auto', width: '200px', maxWidth: '300px', height: '200px', maxHeight: '500px', borderRadius: '100%', objectFit: 'cover' }} alt="avatar Placeholder" />
              )}
              <Button sx={{ mt: '1.25rem', color: 'dark.main', marginTop: 2 }} variant="contained" backgroundColor="primary" size="small">
                cambiar foto
                <input type="file" name="foto" id="foto" accept="image/*" ref={inputRef} onChange={handleImageChange} style={{ display: 'none' }} />
              </Button>
            </div>

            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <PersonIcon sx={{ color: '#0BA884', mr: 1, my: 0.5 }} />
              <TextField
                id="TuNombre"
                label="Tu nombre"
                variant="standard"
                required
                sx={{ width: 300, }} />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <EmojiEmotionsIcon sx={{ color: '#0BA884', mr: 1, my: 0.5 }} />
              <TextField
                id="info"
                label="info"
                required
                variant="standard"
                sx={{ width: 300, }} />
            </Box>

            <Button type="submit" variant="contained" sx={{ color: 'dark.main', mt: 3 }} size="small" endIcon={<SendIcon />}>
              Guardar
            </Button>
          </div>
        </Box>
      </div>
    </>
  );
};
