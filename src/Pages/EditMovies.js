import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import { useNavigate } from "react-router-dom";
import { API } from "../api";
import { Loading } from "../Components/Loading";
import {EditMovieForm} from "../Components/EditMovieForm"

export function EditMovies() {
  // const moviesList = INITIAL_MOVIES_LIST;

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovieInfo = () => {
    fetch(`${API}/Movies/${movieId}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setMovie(mv));
  };

  useEffect(() => getMovieInfo(), []);

  return movie ? <EditMovieForm movie={movie} /> : <Loading />;
}


