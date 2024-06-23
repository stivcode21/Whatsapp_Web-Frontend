import { Button, TextField, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PersonIcon from '@mui/icons-material/Person';

export const AuthRegister = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviado")
  };

  return (
    <>
      <div class="container" className="h-screen w-full bg-clr-bg">
        <header className="bg-clr-bg  pt-4 flex justify-between">
          <button>
            <ArrowBackIcon fontSize="large" className="text-clr-main ml-5" />
          </button>
          <h2 className="text-clr-main font-medium text-xl">Registro</h2>
          <button>
            <MoreVertIcon fontSize="large" className="text-clr-main mr-5" />
          </button>
        </header>

        <Box component="form" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-center text-clr-main text-center gap-5">
            <img src="./assets/avatar-placeholder.jpg" className="w-40 rounded-full mt-20 -mb-5 m-auto" alt="avatar Placeholder" id="img" />
            <input
              type="file"
              name="foto"
              id="foto"
              accept="image/*"
              hidden
            />
            <Button sx={{ mt: '1.25rem', color: 'dark.main', marginTop: 1 }} variant="contained" backgroundColor="primary" size="small">
              <label htmlFor="foto">
                Cambiar Foto
              </label>
            </Button>

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
