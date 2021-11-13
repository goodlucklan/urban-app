import React from "react";
import { TextInput } from "react-native-paper";
export const TextInputComponent = ({ text, value, setChange }) => {
  return (
    <TextInput
      label={text}
      mode="outlined"
      theme={{
        colors: {
          primary: "#000000",
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
      value={value}
      onChangeText={setChange}
    />
  );
};
