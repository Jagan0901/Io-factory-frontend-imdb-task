import { useParams } from "react-router-dom";
import { API } from "../api";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Loading } from "../Components/Loading";
import {EditShowForm} from "../Components/EditShowForm"
import { UserState } from "../Context/UsersProvider";

export function EditShows() {
  const {user} = UserState();
  const { showId } = useParams();
  const [series, setSeries] = useState(null);

  const getShows = () => {
    fetch(`${API}/TVShows/${showId}`, {
      method: "GET",
      headers: {
        "x-auth-token": `${user.token}`,
      },
    })
      .then((data) => data.json())
      .then((show) => setSeries(show));
  };

  useEffect(() => getShows(), []);

  return series ? <EditShowForm series={series} /> : <Loading />;
}


