import React, { useState, useContext } from "react";
import { TextInputComponent } from "../components/textInput.component";
import styled from "styled-components";
import { SafeArea } from "../components/safeArea.component";
import { Title } from "react-native-paper";
import { ButtonComponent } from "../components/button.component";
import { SeleccionContext } from "../providers/SeleccionFreeStyler";
const Border = styled.View`
  margin: ${(props) => props.theme.space[2]};
  flex: 1;
`;
export const Start = () => {
  const [primerMC, setprimerMC] = useState("");
  const [segundoMC, setsegundoMC] = useState("");
  const { setcorrecto } = useContext(SeleccionContext);
  const valuesMC = () => {
    if (primerMC && segundoMC) {
      setcorrecto(true);
    }
  };
  return (
    <SafeArea>
      <Border>
        <Title style={{ textAlign: "center", letterSpacing: 1.5 }}>
          Urban Roosters
        </Title>
        <TextInputComponent
          text="Ingresa el nombre del primer MC"
          value={primerMC}
          setChange={(text) => setprimerMC(text)}
        />
        <TextInputComponent
          text="Ingresa el nombre del segundo MC"
          value={segundoMC}
          setChange={(text) => setsegundoMC(text)}
        />
        <ButtonComponent content={"Siguiente"} onPress={() => valuesMC()} />
      </Border>
    </SafeArea>
  );
};
