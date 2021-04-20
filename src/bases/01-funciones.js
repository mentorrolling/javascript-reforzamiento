// function saludar(nombre) {
//   return `Hola, ${nombre}`;
// }

// const saludar = function (nombre) {
//   return `Hola, ${nombre}`;
// };

// saludar = 30;
//console.log(saludar);

// const saludar2 = (nombre) => {
//   return `Hola, ${nombre}`;
// };

const saludar2 = (nombre) => `Hola, ${nombre}`;

console.log(saludar2("Vegeta"));

// const getUser = () => {
//   return {
//     uid: "ABC123",
//     username: "El_papi1502",
//   };
// };

const getUser = () => ({
  uid: "ABC123",
  username: "El_papi1502",
});

console.log(getUser());

//tarea

// function getUsuarioActivo(nombre) {
//   return {
//     uid: "ABC567",
//     username: nombre,
//   };
// }

const getUsuarioActivo = (nombre) => ({
  uid: "ABC567",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Pablo");

console.log(usuarioActivo);
