import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/styles";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        
      </ThemeProvider>
    </>
  );
}
