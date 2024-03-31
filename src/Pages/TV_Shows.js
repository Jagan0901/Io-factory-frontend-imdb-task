import { WebSeriesList } from "../Components/WebSeriesList";
import { useEffect, useState } from "react";
import { API } from "../api";
import { Loading } from "../Components/Loading";
import { NavBar } from "../Components/NavBar";
import { UserState } from "../Context/UsersProvider";
import { useNavigate } from "react-router-dom";

export function TV_Shows() {
  const [webSeriesList, setWebSeriesList] = useState(null);
  // const { user } = UserState();
  const [user, setUser] = useState();
  const navigate = useNavigate();
  // console.log(user.token);

  const userDataInLocalStorage = () => {
    const userInfo = JSON.parse(localStorage.getItem("imdb-userInfo"));
    setUser(userInfo);

    if (!userInfo) {
      navigate("/");
    }
  };

  useEffect(() => userDataInLocalStorage(), []);

  const getShows = () => {
    if (user) {
      fetch(`${API}/TVShows`, {
        method: "GET",
        headers: {
          "x-auth-token": `${user.token}`,
        },
      })
        .then((data) => data.json())
        .then((tvShows) => setWebSeriesList(tvShows));
    }
  };
  useEffect(() => getShows(), [user]);
  // console.log(user);

  return webSeriesList ? (
    <div>
      <NavBar />
      <div className="App-container">
        {webSeriesList?.map((ws) => (
          <WebSeriesList
            key={ws.id}
            webSeries={ws}
            refresh={getShows}
            token={user.token}
          />
        ))}
      </div>
    </div>
  ) : (
    <Loading />
  );
}
