import React from "react";
import { TextInput } from "react-native-paper";
export const Casillas = ({ label, value, change }) => {
  return (
    <TextInput
      value={value}
      onChangeText={change}
      placeholder={label}
      placeholderTextColor="#000000"
      theme={{
        colors: {
          primary: "#000000",
          text: "#000000",
        },
      }}
      style={{
        margin: 1,
      }}
    />
  );
};
