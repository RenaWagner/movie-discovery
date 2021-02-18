import React, { useState } from "react";
import StatusText from "../components/StatusText";
import MovieCard from "../components/MovieCard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const axios = require("axios");
const apiKey = 19062065;

export default function AboutPage() {
  const [searchText, set_searchText] = useState("");
  const [searchingState, set_searchingState] = useState({
    status: "idle",
    movieDataList: [],
  });

  const route_parameters = useParams();
  console.log(route_parameters);
  const search = async () => {
    console.log("Todo search movies for:", searchText);
    const queryParam = encodeURIComponent(searchText);
    set_searchingState({ ...searchingState, status: "searching" });

    const data = await axios.get(
      `https://omdbapi.com/?apikey=${apiKey}&s=${queryParam}`
    );

    set_searchingState({ status: "done", movieDataList: data.data.Search });
    set_searchText("");
  };

  console.log(searchingState.movieDataList);

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          type="text"
          value={searchText}
          onChange={(event) => {
            set_searchText(event.target.value);
          }}
        />
        <button onClick={search}>Search</button>
      </p>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {/* <StatusText state={searchingState} /> */}
        {searchingState.movieDataList.map((item, index) => {
          return (
            <div key={index} style={{ marginRight: 15, marginLeft: 15 }}>
              <MovieCard
                movieTitle={item.Title}
                releaseYear={item.Year}
                posterURL={item.Poster}
                imdbId={item.imdbID}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
