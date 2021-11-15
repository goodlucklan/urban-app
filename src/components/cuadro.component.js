import React from "react";
import { TextInput } from "react-native-paper";
export const Cuadro = ({ value, change }) => {
  return (
    <TextInput
      mode="outlined"
      value={value}
      onChangeText={change}
      theme={{
        colors: {
          primary: "#000000",
          text: "#000000",
        },
      }}
      style={{
          margin: 1
      }}
    />
  );
};
