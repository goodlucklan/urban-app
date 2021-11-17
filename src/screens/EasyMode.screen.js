import React from "react";
import { View, Text, TextInput } from "react-native";
import { SafeArea } from "../components/safeArea.component";

export const EasyMode = () => {
  return (
    <SafeArea>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <Text>EasyMode</Text>
          <Text>HardMode</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            margin: 5,
          }}
        >
          <TextInput
            keyboardType="numeric"
            style={{
              borderColor: "#000000",
              borderWidth: 1,
              margin: 1,
            }}
          />
          <TextInput
            keyboardType="numeric"
            style={{
              borderColor: "#000000",
              borderWidth: 1,
              margin: 1,
            }}
          />
          <TextInput
            keyboardType="numeric"
            style={{
              borderColor: "#000000",
              borderWidth: 1,
              margin: 1,
            }}
          />
          <TextInput
            keyboardType="numeric"
            style={{
              borderColor: "#000000",
              borderWidth: 1,
              margin: 1,
            }}
          />
        </View>
      </View>
    </SafeArea>
  );
};
