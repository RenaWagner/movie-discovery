import React from "react";
import { useParams } from "react-router-dom";

export default function MoviePage(props) {
  const { route_parameters } = useParams();
  return <div>this post shows</div>;
}
