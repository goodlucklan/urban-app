import React from "react";
import { TextInputComponent } from "../components/textInput.component";
import styled from "styled-components";
import { SafeArea } from "../components/safeArea.component";
import { Title } from "react-native-paper";
const Border = styled.View`
  margin: ${(props) => props.theme.space[2]};
  flex: 1;
`;
export const Start = () => {
  return (
    <SafeArea>
      <Border>
        <Title style={{ textAlign: "center", letterSpacing: 1.5 }}>
          Urban Roosters
        </Title>
        <TextInputComponent text="Ingresa el nombre del primer MC" />
        <TextInputComponent text="Ingresa el nombre del segundo MC" />
      </Border>
    </SafeArea>
  );
};
