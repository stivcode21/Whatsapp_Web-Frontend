import * as React from 'react';
import { Button } from '@mui/material';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';

function OTPInput({ separator, length, value, onChange }) {
  const inputRefs = React.useRef(new Array(length).fill(null));

  const focusInput = (targetIndex) => {
    const targetInput = inputRefs.current[targetIndex];
    targetInput.focus();
  };

  const selectInput = (targetIndex) => {
    const targetInput = inputRefs.current[targetIndex];
    targetInput.select();
  };

  const handleKeyDown = (event, currentIndex) => {
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowDown':
      case ' ':
        event.preventDefault();
        break;
      case 'ArrowLeft':
        event.preventDefault();
        if (currentIndex > 0) {
          focusInput(currentIndex - 1);
          selectInput(currentIndex - 1);
        }
        break;
      case 'ArrowRight':
        event.preventDefault();
        if (currentIndex < length - 1) {
          focusInput(currentIndex + 1);
          selectInput(currentIndex + 1);
        }
        break;
      case 'Delete':
        event.preventDefault();
        onChange((prevOtp) => {
          const otp =
            prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
          return otp;
        });

        break;
      case 'Backspace':
        event.preventDefault();
        if (currentIndex > 0) {
          focusInput(currentIndex - 1);
          selectInput(currentIndex - 1);
        }

        onChange((prevOtp) => {
          const otp =
            prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
          return otp;
        });
        break;

      default:
        break;
    }
  };

  const handleChange = (event, currentIndex) => {
    const currentValue = event.target.value;
    let indexToEnter = 0;

    while (indexToEnter <= currentIndex) {
      if (inputRefs.current[indexToEnter].value && indexToEnter < currentIndex) {
        indexToEnter += 1;
      } else {
        break;
      }
    }
    onChange((prev) => {
      const otpArray = prev.split('');
      const lastValue = currentValue[currentValue.length - 1];
      otpArray[indexToEnter] = lastValue;
      return otpArray.join('');
    });
    if (currentValue !== '') {
      if (currentIndex < length - 1) {
        focusInput(currentIndex + 1);
      }
    }
  };

  const handleClick = (event, currentIndex) => {
    selectInput(currentIndex);
  };

  const handlePaste = (event, currentIndex) => {
    event.preventDefault();
    const clipboardData = event.clipboardData;

    // Check if there is text data in the clipboard
    if (clipboardData.types.includes('text/plain')) {
      let pastedText = clipboardData.getData('text/plain');
      pastedText = pastedText.substring(0, length).trim();
      let indexToEnter = 0;

      while (indexToEnter <= currentIndex) {
        if (inputRefs.current[indexToEnter].value && indexToEnter < currentIndex) {
          indexToEnter += 1;
        } else {
          break;
        }
      }

      const otpArray = value.split('');

      for (let i = indexToEnter; i < length; i += 1) {
        const lastValue = pastedText[i - indexToEnter] ?? ' ';
        otpArray[i] = lastValue;
      }

      onChange(otpArray.join(''));
    }
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}> {/* Aumenta el espacio entre inputs */}
      {new Array(length).fill(null).map((_, index) => (
        <React.Fragment key={index}>
          <input
            ref={(ele) => {
              inputRefs.current[index] = ele;
            }}
            type="text"
            maxLength={1}
            style={{
              width: '3rem',
              height: '3rem',
              fontSize: '1.5rem',
              textAlign: 'center',
              border: '1px solid green',
              borderRadius: '4px',
              outline: 'none',
              backgroundColor: 'transparent',
              color: 'white',
            }}
            onKeyDown={(event) => handleKeyDown(event, index)}
            onChange={(event) => handleChange(event, index)}
            onClick={(event) => handleClick(event, index)}
            onPaste={(event) => handlePaste(event, index)}
            value={value[index] ?? ''}
            aria-label={`Digit ${index + 1} of OTP`}
          />
          {index === length - 1 ? null : separator}
        </React.Fragment>
      ))}
    </Box>
  );
}

OTPInput.propTypes = {
  length: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  separator: PropTypes.node,
  value: PropTypes.string.isRequired,
};

export default function OtpVerification() {
  const [otp, setOtp] = React.useState('');

  const handleSubmit = () => {
    // Aquí puedes manejar la lógica de envío del formulario o cualquier otra acción necesaria
    console.log("OTP entered:", otp); // Puedes usar 'otp' para enviar el valor del OTP ingresado
  };

  return (
    <main className="bg-blue-dark w-screen h-screen flex flex-col items-center justify-center">
      <header className="text-center mb-7">
        <h1 className="text-white">Verificación de Email</h1>
        <p className="text-grey-medium">
          Ingresa el código enviado a{" "}
          <span className="font-bold">gaelseg********@gmail.com</span>
        </p>
      </header>

      <div className="mb-5">
        <OTPInput value={otp} onChange={setOtp} length={6} /> {/* Aquí integras el componente OTPInput */}
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
          onClick={handleSubmit}
        >
          Continuar
        </Button>
      </div>
    </main>
  );
}
