import React, { createContext, useState } from "react";


export const SeleccionContext = createContext();

export const SeleccionFreeStylerProvider = ({ children }) => {
  const [correcto, setcorrecto] = useState(false);
  return (
    <SeleccionContext.Provider
      value={{
        correcto,
        setcorrecto,
      }}
    >
      {children}
    </SeleccionContext.Provider>
  );
};
