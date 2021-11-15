export const Resultado = (props) => {
  let RecolectandoDatos = [...props];
  let ConvirtiendoDatos = RecolectandoDatos.map((x) => parseFloat(x));
  let sum = ConvirtiendoDatos.reduce((total, currentValue) => {
    return total + currentValue;
  });
  return sum;
};
