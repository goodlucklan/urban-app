import React, { useContext } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { SeleccionContext } from "../providers/SeleccionFreeStyler";
import { Start } from "./Start.screen";
const Texting = () => {
  return (
    <View>
      <Text>Funciona</Text>
    </View>
  );
};
export const Principal = () => {
  const { correcto } = useContext(SeleccionContext);
  return (
    <NavigationContainer>
      {correcto ? <Texting /> : <Start />}
    </NavigationContainer>
  );
};
