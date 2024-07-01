import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

import { PalleteColors } from '../colors.js';

// PAGES
import { AuthLogin } from './auth/AuthLogin.jsx'
import { OtpVerification } from './auth/OtpVerification.jsx'
import { AuthCreateProfile } from './auth/AuthCreateProfile.jsx'


// BROWSER ROUTER
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLogin />,
  },
  {
    path: "/verification",
    element: <OtpVerification />
  },
  {
    path: "/create-profile",
    element: <AuthCreateProfile />
  }
]);


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
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
