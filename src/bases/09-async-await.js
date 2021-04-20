// Async convierte una funcion en una promesa
//await nos permite trabajar el código como si fuera sincrono

const getImagen = async () => {
  try {
    //intenta hacer esto
    const apiKey = "yGsEUd2oFkyppcVxZBZ5H2aB7uQLZRIf";

    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    //   console.log(data);
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    //si da error
    console.log(error);
  }
};
getImagen();
// peticion

//   .then((resp) => resp.json())
//   .then(({ data }) => {
//     // console.log(data.images.original.url);
//     const { url } = data.images.original;

//     const img = document.createElement("img");
//     img.src = url;
//     document.body.append(img);
//   })
//   .catch((err) => console.warn(err));
