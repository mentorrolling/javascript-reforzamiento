import { getHeroeById } from "./04-import-export";

//primero se ejecuta todo lo sincrono
// const promesa = new Promise((resolve, reject) => {
//   //resolve cuando la promesa es exitosa ejecuta un callback

//   //reject cuando la promesa falla

//   setTimeout(() => {
//     // console.log("2 segundos despues");
//     //tarea traer la funcion getHeroeById de la clase de import
//     const heroe = getHeroeById(2);
//     // console.log(heroe);
//     resolve(heroe);
//     // reject("No se puede encontrar el héroe");
//   }, 2000);
// });

// //then la promesa se hizo correctamente
// //catch la promesa dio error
// promesa
//   .then((heroe) => {
//     console.log("Heroe ", heroe);
//   })
//   .catch((err) => console.warn(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);

      if (heroe) {
        resolve(heroe);
      } else {
        reject("El héroe no se encontró");
      }
    }, 2000);
  });
};
//then la promesa se hizo correctamente
//catch la promesa dio error
getHeroeByIdAsync(3)
  .then((heroe) => {
    console.log(heroe);
  })
  .catch((err) => console.warn(err));
