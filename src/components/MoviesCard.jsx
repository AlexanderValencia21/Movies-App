import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../components/MovieCard.css";

export function MoviesCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300/" + movie.poster_path;
  const titleM = movie.title;

  return (
      <li className="movieCard">
        <Link to={"/movies/" + movie.id}>
          <img
            title={titleM}
            width={230}
            height={345}
            src={imageUrl}
            className="movieImage"
          />
        </Link>
        <p className="title">{movie.title}</p>
      </li>
  );
}

MoviesCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    // Aquí puede agregar más validaciones para otras propiedades
  }).isRequired,
};
