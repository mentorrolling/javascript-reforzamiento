const personajes = ["Goku", "Vegeta", "Trunks"];

const [, , p2] = personajes;

console.log(p2);

const arr = [
  "Pablo",
  () => {
    console.log("Hola MUndo");
  },
];

console.log(arr);
// arr[1]();

const [texto, setTexto] = arr;

setTexto();
