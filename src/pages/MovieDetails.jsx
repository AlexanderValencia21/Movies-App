import { useParams } from "react-router-dom";
import { get } from "../data/httpMovies";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getMovieImage } from "../utils/getMovieImage";
import "../pages/MovieDetails.css";
export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [generos, setGeneros] = useState({});
  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setGeneros(data.genres);
      console.log(data.genres);
    });
  }, [movieId]);

  const imgUrl = getMovieImage(movie.poster_path, 400);

  return (
    <div className="detailsContainer">
      <img src={imgUrl} alt={movie.title} className="col movieImg" />
      <div className="col movieDetails">
        <p className="title">
          <strong>Title: </strong> {movie.title}
        </p>
        <p className="p">
          <strong>Genere: </strong>{" "}
          {movie.genres && movie.genres.map((g) => g.name).join(", ")}
        </p>
        <p className="p">
          <strong>Description: </strong> {movie.overview}
        </p>
        <p className="p">
          <strong>Release date: </strong> {movie.release_date}📆
        </p>
        <p className="p">
          <strong>Vote average: </strong> {movie.vote_average}📊
        </p>
        {/* Agrega más elementos para mostrar la información de la película */}
      </div>
    </div>
  );
}

MovieDetails.propTypes = {
  movieId: PropTypes.string,
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    // Agrega más propiedades del objeto movie según sea necesario
  }),
};
