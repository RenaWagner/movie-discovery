import React, { useState, useEffect } from "react";
import StatusText from "../components/StatusText";
import MovieCard from "../components/MovieCard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
} from "react-router-dom";

const axios = require("axios");

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [searchingState, set_searchingState] = useState({
    status: "idle",
    movieDataList: [],
  });

  const history = useHistory();

  const navigateToSearch = () => {
    const routeParam = encodeURIComponent(searchText);
    history.push(`/discover/${routeParam}`); //pushing to a new page with this URL
  };

  const route_parameters = useParams();
  const searchedWords = route_parameters;
  console.log(searchedWords);
  const apiKey = 19062065;

  useEffect(() => {
    async function fetchData() {
      console.log("Fetching data!");
      set_searchingState({ ...searchingState, status: "searching" });

      const res = await axios.get(
        `https://www.omdbapi.com/?s=${searchedWords.searchtext}&apikey=${apiKey}`
      );
      set_searchingState({ status: "done", movieDataList: res.data.Search });
      console.log("Done fetching!");
      set_searchText("");
    }
    if (searchedWords.searchtext) {
      //if searchtext is not undefined
      fetchData();
    }
  }, [route_parameters]);

  // const search = async () => {
  //   console.log("Todo search movies for:", searchText);
  //   const queryParam = encodeURIComponent(searchText);
  //   set_searchingState({ ...searchingState, status: "searching" });

  //   const data = await axios.get(
  //     `https://omdbapi.com/?apikey=${apiKey}&s=${queryParam}`
  //   );

  //   set_searchingState({ status: "done", movieDataList: data.data.Search });
  //   set_searchText("");
  // };

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
        <button onClick={navigateToSearch}>Search</button>
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
