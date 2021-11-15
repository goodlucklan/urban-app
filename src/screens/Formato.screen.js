import React, { useState } from "react";
import { Headline } from "react-native-paper";
import styled from "styled-components";
import { Casillas } from "../components/casillas.component";
import { Cuadro } from "../components/cuadro.component";
import { SafeArea } from "../components/safeArea.component";
import { Resultado } from "../utils/resultado";

const Vista = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;
const Completo = styled.View`
  flex: 1;
`;
const Vista2 = styled.View`
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Formato = () => {
  const [Salida1MC, setSalida1MC] = useState("0");
  const [Salida2MC, setSalida2MC] = useState("0");
  const [Salida3MC, setSalida3MC] = useState("0");
  const [Salida4MC, setSalida4MC] = useState("0");
  const [Salida5MC, setSalida5MC] = useState("0");
  const [Salida6MC, setSalida6MC] = useState("0");
  const [Tecnicas, setTecnicas] = useState("0");
  const [Flow, setFlow] = useState("0");
  const [Escena, setEscena] = useState("0");

  const [Salida1MC2, setSalida1MC2] = useState("0");
  const [Salida2MC2, setSalida2MC2] = useState("0");
  const [Salida3MC2, setSalida3MC2] = useState("0");
  const [Salida4MC2, setSalida4MC2] = useState("0");
  const [Salida5MC2, setSalida5MC2] = useState("0");
  const [Salida6MC2, setSalida6MC2] = useState("0");
  const [Tecnicas2, setTecnicas2] = useState("0");
  const [Flow2, setFlow2] = useState("0");
  const [Escena2, setEscena2] = useState("0");

  return (
    <SafeArea>
      <Headline
        style={{
          textAlign: "center",
        }}
      >
        Easy Mode
      </Headline>
      <Completo>
        <Vista>
          <Headline style={{ paddingRight: 10, width: 100 }}>Khan</Headline>
          <Cuadro value={Salida1MC} change={(text) => setSalida1MC(text)} />
          <Cuadro value={Salida2MC} change={(text) => setSalida2MC(text)} />
          <Cuadro value={Salida3MC} change={(text) => setSalida3MC(text)} />
          <Cuadro value={Salida4MC} change={(text) => setSalida4MC(text)} />
          <Cuadro value={Salida5MC} change={(text) => setSalida5MC(text)} />
          <Cuadro value={Salida6MC} change={(text) => setSalida6MC(text)} />
          <Vista2>
            <Casillas
              label="Tecnicas"
              value={Tecnicas}
              change={(text) => setTecnicas(text)}
            />
            <Casillas
              label="Flow"
              value={Flow}
              change={(text) => setFlow(text)}
            />
            <Casillas
              label="P. Escena"
              value={Escena}
              change={(text) => setEscena(text)}
            />
          </Vista2>
          <Headline style={{ paddingRight: 10, width: 100 }}>
            {[
              Salida1MC,
              Salida2MC,
              Salida3MC,
              Salida4MC,
              Salida5MC,
              Salida6MC,
            ].reduce((total, currentValue) => {
              return parseFloat(total) + parseFloat(currentValue);
            })}
          </Headline>
        </Vista>
        <Vista>
          <Headline style={{ paddingRight: 10, width: 100 }}>Guetto</Headline>
          <Cuadro value={Salida1MC2} change={(text) => setSalida1MC2(text)} />
          <Cuadro value={Salida2MC2} change={(text) => setSalida2MC2(text)} />
          <Cuadro value={Salida3MC2} change={(text) => setSalida3MC2(text)} />
          <Cuadro value={Salida4MC2} change={(text) => setSalida4MC2(text)} />
          <Cuadro value={Salida5MC2} change={(text) => setSalida5MC2(text)} />
          <Cuadro value={Salida6MC2} change={(text) => setSalida6MC2(text)} />
          <Vista2>
            <Casillas
              label="Tecnicas"
              value={Tecnicas2}
              change={(text) => setTecnicas2(text)}
            />
            <Casillas
              label="Flow"
              value={Flow2}
              change={(text) => setFlow2(text)}
            />
            <Casillas
              label="P. Escena"
              value={Escena2}
              change={(text) => setEscena2(text)}
            />
          </Vista2>
          <Headline style={{ paddingRight: 10, width: 100 }}>
            {[
              Salida1MC2,
              Salida2MC2,
              Salida3MC2,
              Salida4MC2,
              Salida5MC2,
              Salida6MC2,
            ].reduce((total, currentValue) => {
              return parseFloat(total) + parseFloat(currentValue);
            })}
          </Headline>
        </Vista>
      </Completo>
    </SafeArea>
  );
};
