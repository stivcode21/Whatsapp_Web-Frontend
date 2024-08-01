import ReactDOM from 'react-dom/client'
import { AuthProvider } from './hooks/useAuth.jsx'

import App from './App.jsx'
import  "./styles/index.css"

import { PalleteColors } from "../colors.js"

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

const theme = createTheme({
  palette: PalleteColors
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <CssBaseline />
      <App />
    </AuthProvider>
  </ThemeProvider>
)