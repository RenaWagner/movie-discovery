import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard(props) {
  return (
    <div>
      <Link to={`/discover/${props.imdbId}`}>
        <p>
          {props.movieTitle} ({props.releaseYear})
        </p>
      </Link>
      <img src={props.posterURL} alt={`${props.movieTitle}'s poster`} />
    </div>
  );
}
