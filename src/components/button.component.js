import React from "react";
import { Button } from "react-native-paper";

export const ButtonComponent = ({ content, onPress }) => {
  return (
    <Button
      mode="contained"
      onPress={onPress}
      theme={{
        colors: {
          background: "#000000",
        },
      }}
      style={{
        backgroundColor: "#000000",
      }}
    >
      {content}
    </Button>
  );
};
