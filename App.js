import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/styles";
import { Start } from "./src/screens/Start.screen";
import { Principal } from "./src/screens/Principal.screen";
import { SeleccionFreeStylerProvider } from "./src/providers/SeleccionFreeStyler";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SeleccionFreeStylerProvider>
          <Principal />
        </SeleccionFreeStylerProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
