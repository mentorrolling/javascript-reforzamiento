//Desestructuración de Objetos
const persona = {
  nombre: "Tony",
  edad: 45,
  alias: "Ironman",
  habilidades: {
    poder: 350,
    velocidad: 70,
  },
};

// const { nombre, edad } = persona;

// console.log(nombre);
// console.log(edad);

const getPersona = ({ edad, alias, habilidades }) => {
  const { poder, velocidad } = habilidades;

  return {
    avenger: alias,
    edad: edad,
    Poder: poder,
    velocity: velocidad,
  };
};

console.log(getPersona(persona));
