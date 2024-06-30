import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { App } from './App.jsx'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import { PalleteColors } from '../colors.js';


//import fuente roboto
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const theme = createTheme({
  palette: PalleteColors

});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
