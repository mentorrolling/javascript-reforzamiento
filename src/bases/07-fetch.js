const apiKey = "yGsEUd2oFkyppcVxZBZ5H2aB7uQLZRIf";

const peticion = fetch(
  //   "https://api.giphy.com/v1/gifs/random?api_key=yGsEUd2oFkyppcVxZBZ5H2aB7uQLZRIf"
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

peticion
  //   .then((resp) => {
  //     // console.log(resp);
  //     resp.json().then((data) => {
  //       console.log(data);
  //     });
  //   })
  //Promesas encadenadas

  .then((resp) => resp.json())
  .then(({ data }) => {
    // console.log(data.images.original.url);
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  })
  .catch((err) => console.warn(err));
