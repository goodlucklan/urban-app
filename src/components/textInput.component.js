import React from "react";
import { TextInput } from "react-native-paper";
export const TextInputComponent = ({ text }) => {
  return (
    <TextInput
      label={text}
      mode="outlined"
      theme={{
        colors: {
          primary: "#FFFFFF",
          text: "#000000",
        },
        animation: {
          scale: 2,
        },
      }}
      style={{
        marginBottom: 10,
      }}
      selectionColor="#000000"
    />
  );
};
