import axios from "axios";

const gif = axios(
  "https://api.giphy.com/v1/gifs/random?api_key=yGsEUd2oFkyppcVxZBZ5H2aB7uQLZRIf"
);
gif
  .then(({ data }) => {
    const datos = data.data;
    const { url } = datos.images.original;
    console.log(url);

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  })
  .catch((error) => console.warn(error));
