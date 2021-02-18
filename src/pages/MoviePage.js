import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MoviePage() {
  const route_parameters = useParams();
  const imdb_id = route_parameters.imdb_id;
  const apiKey = 19062065;
  const [movieData, set_movieData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      console.log("Fetching data!");

      const res = await axios.get(
        `http://www.omdbapi.com/?i=${imdb_id}&apikey=${apiKey}`
      );
      set_movieData(res.data);
      console.log("Done fetching!");
    }
    fetchData();
  }, [imdb_id]);

  console.log(movieData);
  console.log(movieData.Genre);

  //   const movieGenreArray = movieData.Genre.split(",");
  //   console.log(movieGenreArray);

  return (
    <div>
      <h2 className="mt-3">
        {movieData.Title} {movieData.Year}
      </h2>
      <p>{movieData.Genre}</p>
      <img
        src={movieData.Poster}
        alt={`${movieData.Title}'s image`}
        style={{ float: "left" }}
        className={"mr-5"}
      />
      <p className="text-secondary">Director:</p>
      <p>{movieData.Director}</p>
      <p className="text-secondary">Language:</p> <p>{movieData.Language}</p>
      <p className="text-secondary ml-5">Plot:</p> <p>{movieData.Plot}</p>
      <p className="text-secondary">IMDB Rating:</p>
      <p>{movieData.imdbRating}</p>
    </div>
  );
}
