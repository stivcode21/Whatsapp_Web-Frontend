import { Box } from '@mui/system';
import { useEffect, useRef, useState } from 'react';

function OTPInput({ separator, length, value, onChange }) {
  const inputRefs = useRef(new Array(length).fill(null));

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
        <div key={index}>
          <input
            ref={(ele) => {
              inputRefs.current[index] = ele;
            }}
            type="text"
            className='text-grey-light w-8 h-8 sm:text-2xl sm:w-14 sm:h-14 text-center border border-green-700 focus:border-green-main outline-none bg-transparent rounded'
            maxLength={1}
            
            onKeyDown={(event) => handleKeyDown(event, index)}
            onChange={(event) => handleChange(event, index)}
            onClick={(event) => handleClick(event, index)}
            onPaste={(event) => handlePaste(event, index)}
            value={value[index] ?? ''}
            aria-label={`Digit ${index + 1} of OTP`}
          />
          {index === length - 1 ? null : separator}
        </div>
      ))}
    </Box>
  );
}

export function OtpVerification() {
  const [otp, setOtp] = useState("");

  const handleSubmit = () => {
    // Aquí puedes manejar la lógica de envío del formulario o cualquier otra acción necesaria
      alert('Todos los campos han sido llenos')
  };

   // Efecto para manejar el cambio en el OTP
   useEffect(() => {
    if (otp.length === 6) {
      handleSubmit(); // Llama a handleSubmit cuando todos los campos estén llenos
    }
  }, [otp]);

  return (
    <div className='bg-blue-dark'>
      <main className="w-screen max-w-md mx-auto h-screen flex flex-col items-center justify-center px-6">
        <header className="text-center mb-7">
          <h1 className="text-grey-light text-xl mb-2">Verificación de Email</h1>
          <p className="text-grey-medium text-sm">
            Ingresa el código enviado a{" "}
            <span className="font-bold">gaelseg********@gmail.com</span>
          </p>
        </header>
      
        <div className="mb-5">
          <OTPInput value={otp} onChange={setOtp} length={6} /> {/* Aquí integras el componente OTPInput */}
        </div>
      
        <div className="flex flex-col justify-center mt-8">
          <p className="text-grey-medium font-bold pb-1">¿No recibiste el código?</p>
          <button className="text-green-main uppercase">Reenviar código</button>
        </div>
      </main>
    </div>
  );
}
