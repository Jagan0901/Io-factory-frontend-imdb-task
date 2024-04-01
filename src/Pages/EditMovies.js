import { useNavigate, useParams } from "react-router-dom";
import { API } from "../api";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Loading } from "../Components/Loading";
import { EditMovieForm } from "../Components/EditMovieForm";
import { UserState } from "../Context/UsersProvider";

export function EditMovies() {
  // const { user } = UserState();
  const [user, setUser] = useState();
  const { movieId } = useParams();
  const [series, setSeries] = useState(null);

  const navigate = useNavigate();

  const userDataInLocalStorage = () => {
    const userInfo = JSON.parse(localStorage.getItem("imdb-userInfo"));
    setUser(userInfo);

    if (!userInfo) {
      navigate("/");
    }
  };

  useEffect(() => userDataInLocalStorage(), []);

  const getShows = () => {
    fetch(`${API}/Movies/${movieId}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((show) => setSeries(show));
  };

  useEffect(() => getShows(), []);

  return series && user ? <EditMovieForm series={series} /> : <Loading />;
}
