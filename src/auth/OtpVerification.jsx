import VerificationInput from "react-verification-input";
import { Button } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

export default function OtpVerification() {
  return (
    <main className="bg-blue-dark w-screen h-screen flex flex-col items-center justify-center">
      <header className="text-center mb-7">
        <h1 className="text-white"> Verificación de Email </h1>
        <p className="text-grey-medium">
          {" "}
          Ingresa el código enviado a{" "}
          <span className="font-bold"> gaelseg********@gmail.com </span>
        </p>
      </header>

      <div className="mb-5">
      <VerificationInput
        onChange={console.log}
        inputField={{
          onChange: (e) => {
            console.log(e.nativeEvent.target.value);
          },
        }}
        length={6}
        validChars="0-9"
        removeDefaultStyles
        container={{
          className: "container",
        }}
        characters={{
          className: "characters",
        }}
        character={{
          className: "character",
          classNameInactive: "character--inactive",
          classNameSelected: "character--selected",
        }}
      />
      </div>

      <div className="flex flex-col justify-center">
        <p className="text-grey-medium font-bold">¿No recibiste el código?</p>
        <button className="text-green-main uppercase">Reenviar código</button>
      </div>

      <div className="w-80 px-0 pt-5 flex justify-between">
        <Button
          variant="text"
          sx={{ mt: 3, color: "gray" }}
          size="small"
          startIcon={<ArrowBackOutlinedIcon color="green" />}
        >
          Regresar
        </Button>

        <Button
          type="submit"
          variant="text"
          sx={{ mt: 3, color: "grey.light" }}
          size="small"
          endIcon={<ArrowForwardOutlinedIcon color="green" />}
        >
          Continuar
        </Button>
      </div>
    </main>
  );
}
