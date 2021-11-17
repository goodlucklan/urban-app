import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SeleccionContext } from "../providers/SeleccionFreeStyler";
import { Start } from "./Start.screen";
import { Formato } from "./Formato.screen";
import { EasyMode } from "./EasyMode.screen";

export const Principal = () => {
  const { adquirido } = useContext(SeleccionContext);
  return (
    <NavigationContainer>
      {adquirido ? <EasyMode /> : <Start />}
    </NavigationContainer>
  );
};
