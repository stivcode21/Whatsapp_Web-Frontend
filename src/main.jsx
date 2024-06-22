import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { App } from './App.jsx'
import { ThemeProvider, createTheme } from '@mui/material';

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
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
