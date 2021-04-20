const personajes = ["Goku", "Vegeta", "Trunks"];

const [, , p2] = personajes;

console.log(p2);

const useState = [
  "Pablo",
  () => {
    console.log("Hola MUndo");
  },
];

console.log(useState);
// arr[1]();

const [state, setState] = useState;

setState();
