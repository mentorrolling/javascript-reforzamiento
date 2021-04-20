import axios from "axios";

// const gif = axios(
//   "https://api.giphy.com/v1/gifs/random?api_key=yGsEUd2oFkyppcVxZBZ5H2aB7uQLZRIf"
// );
// gif
//   .then(({ data }) => {
//     const datos = data.data;
//     const { url } = datos.images.original;
//     console.log(url);

//     const img = document.createElement("img");
//     img.src = url;
//     document.body.append(img);
//   })
//   .catch((error) => console.warn(error));

const getGif = async () => {
  /*La declaración try...catch señala un bloque de instrucciones a intentar (try), y especifica una respuesta si se produce una excepción (catch). */
  try {
    const gif = await axios(
      "https://api.giphy.com/v1/gifs/random?api_key=yGsEUd2oFkyppcVxZBZ5H2aB7uQLZRIf"
    );

    const { data } = gif.data;

    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);

    //   console.log(data);
  } catch (error) {
    console.warn(error);
  }
};

getGif();
