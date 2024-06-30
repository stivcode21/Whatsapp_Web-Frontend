import React from "react";
import { WelcomePage } from "./auth/WelcomePage";
import { AuthCreateProfile } from "./auth/AuthCreateProfile";
import { AuthLogin } from "./auth/AuthLogin";
import Principal from "./components/Layout/Principal";

export const App = () => {
  return (
    <>
      {/* <AuthLogin /> */}
      < AuthCreateProfile />
    </>
  );
};
