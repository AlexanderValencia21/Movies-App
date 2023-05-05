import icon from "../img/popcorn.png";
export function getMovieImage(path, width) {
  console.log(path, width);
  if (!path) {
    return icon;
  }

  return `https://image.tmdb.org/t/p/w${width}/${path}`;
}
