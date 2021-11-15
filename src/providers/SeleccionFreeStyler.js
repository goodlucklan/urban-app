import React, { createContext, useState } from "react";


export const SeleccionContext = createContext();

export const SeleccionFreeStylerProvider = ({ children }) => {
  const [correcto, setcorrecto] = useState(false);
  return (
    <SeleccionContext.Provider
      value={{
        adquirido: !!correcto,
        setcorrecto,
      }}
    >
      {children}
    </SeleccionContext.Provider>
  );
};
