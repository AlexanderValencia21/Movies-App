import { useEffect, useState } from "react";
import { get } from "../data/httpMovies";
import { MoviesCard } from "../components/MoviesCard";
import "../components/ContextCard.css"
export function ContextCard() {
  const [movies, SetMovies] = useState([]);
  useEffect(() => {
    get("/discover/movie").then((data) => {
      SetMovies(data.results);
      console.log(data)
    });
  }, []);

  return (
    <ul className="container">
      {movies.map((movie) => (
        <MoviesCard key={movie.id}  movie={movie} />
      ))}
    </ul>
  );
}
