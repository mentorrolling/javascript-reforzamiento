//Convertir a función de flecha:
function messageUser(name) {
  return `Hello, my name is ${name}`;
}

console.log(messageUser("Bill Gates"));

//Desestructura el siguiente objeto y completa los mensajes:
const iPad = {
  marca: "Apple",
  linea: "iPad",
  modelo: "8ª Generación",
  version: 2020,
};
console.log(`Producto: `);
console.log(`Marca: `);
console.log(`Modelo: `);
console.log(`Versión: `);

//Desestructura el siguiente arreglo, obten el segundo nombre y usalo como parámetro de la función que viene en el mismo arreglo
const personas = [
  "Laura",

  "Ernesto",
  "Eliana",
  (n) => `Bienvenido a React ${n}`,
];

//Importar la lista de películas del archivo webflix.js y crear una función que permita filtrar las películas por año.

//Convertir a operador ternario los siguientes condicionales

const loading = true;

if (loading) {
  console.log("Cargando...");
} else {
  console.log("Data cargada con éxito");
}

const estado = "activo";

if (estado === "activo") {
  console.log("El usuario puede acceder al sistema");
}
