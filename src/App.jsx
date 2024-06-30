import React from "react";
import { WelcomePage } from "./auth/WelcomePage";
import { AuthRegister } from "./auth/AuthRegister";
import { AuthLogin } from "./auth/AuthLogin";
import Principal from "./components/Layout/Principal";

export const App = () => {
  return (
    <>
      {/* <AuthLogin /> */}
      <Principal />
    </>
  );
};
