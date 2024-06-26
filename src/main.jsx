import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { App } from './App.jsx'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';


//import fuente roboto
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0BA884',
    },
    secondary: {
      main: '#6A747B',
    },
    dark: {
      main: '#132026'
    }
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
