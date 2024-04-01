import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import { API } from "../api";
import { UserState } from "../Context/UsersProvider";

export function WebSeriesDetail() {
  // const {user} = UserState();
  const [user, setUser] = useState();

  const userDataInLocalStorage = () => {
    const userInfo = JSON.parse(localStorage.getItem("imdb-userInfo"));
    setUser(userInfo);

    if (!userInfo) {
      navigate("/");
    }
  };

  useEffect(() => userDataInLocalStorage(), []);

  const [webSeries, setWebSeries] = useState({});

  const { showId } = useParams();
  // const tv_show = webSeriesList[showId];

  const [about, setAbout] = useState(false);
  const [clips, setClips] = useState(false);
  const [crew, setCrew] = useState(true);

  const getShowDetail = () => {
    if (user) {
      fetch(`${API}/TVShows/${showId}`, {
        method: "GET",

      })
        .then((data) => data.json())
        .then((tvShow) => setWebSeries(tvShow));
    }
  };

  useEffect(() => getShowDetail(), [user]);

  const navigate = useNavigate();

  const ratingStyles = {
    color:
      webSeries.rating >= 9
        ? "darkGoldenrod"
        : webSeries.rating >= 8
        ? "green"
        : "red",
    fontWeight: "bold",
    marginTop: "1px",
    fontSize: "18px",
  };
  const posterStyles = {
    width: "30%",
    height: "600px",
    objectFit: "cover",
    marginLeft: "35%",
    marginTop: "50px",
  };
  const nameStyles = {
    marginTop: "1px",
    fontSize: "23px",
    textAlign: "center",
  };
  const divStyles = {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "21%",
    width: "60%",
    marginTop: "35px",
  };
  const summaryStyles = {
    marginTop: "0px",
    marginLeft: "21%",
    width: "60%",
  };
  const frameStyles = {
    maxWidth: "90%",
    margin: "50px",
    marginLeft: "75px",
    border: "20px solid",
  };
  const buttonStyles = {
    display: "flex",
    gap: "10px",
    justifyContent: "space-around",
    marginTop: "25px",
  };
  const backStyles = {
    marginLeft: "50%",
    marginTop: "10px",
    marginBottom: "20px",
  };
  const castStyles = {
    marginTop: "25px",
    marginBottom: "25px",
  };
  return webSeries && user ? (
    <div>
      <div>
        <img src={webSeries.poster} alt={webSeries.name} style={posterStyles} />
      </div>
      <div style={buttonStyles}>
        <Button
          variant="outlined"
          endIcon={crew ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          onClick={() => setCrew(!crew)}
        >
          Actors
        </Button>
        <Button
          variant="outlined"
          endIcon={clips ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          onClick={() => setClips(!clips)}
        >
          Trailer
        </Button>
        <Button
          variant="outlined"
          endIcon={about ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          onClick={() => setAbout(!about)}
        >
          Producers
        </Button>
      </div>
      {crew ? (
        <div style={castStyles}>
          {/* {crews.map((cast) => {
          return(
         <div style={castContainer}>
        <img style={picStyles} src={cast.pic} alt ={cast.name}/>
          <p style={castName}>{cast.name}</p>
          </div>
          ) 
        })} */}
          <CastCrew showId={showId} token={user.token} />
        </div>
      ) : (
        ""
      )}

      {clips ? (
        <div>
          <iframe
            style={frameStyles}
            width="100%"
            height="538"
            // width="30%"
            // height= "400"
            src={webSeries.trailer}
            title={webSeries.trailer}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      ) : (
        ""
      )}

      {about ? (
        <div style={castStyles}>
          {/* {crews.map((cast) => {
          return(
         <div style={castContainer}>
        <img style={picStyles} src={cast.pic} alt ={cast.name}/>
          <p style={castName}>{cast.name}</p>
          </div>
          ) 
        })} */}
          <Producer showId={showId} token={user.token} />
        </div>
      ) : (
        ""
      )}

      {/* <button onClick={()=> navigate(-1)}>Back</button>       */}
      <Button
        style={backStyles}
        variant="contained"
        startIcon={<ArrowBackIosIcon />}
        onClick={() => navigate(-1)}
      >
        BACK
      </Button>
    </div>
  ) : (
    "Loading..."
  );
}

function CastCrew({ showId, token }) {
  const [showCast, setShowCast] = useState([]);
  // const {user} = UserState();

  const getShowCrew = () => {
    fetch(`${API}/TVShows/${showId}`, {
      method: "GET",

    })
      .then((data) => data.json())
      .then((tvShow) => setShowCast(tvShow.casts));
  };

  useEffect(() => getShowCrew(), []);

  const crewContainer = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  };

  return (
    <div style={crewContainer}>
      {showCast.map((crew, index) => (
        <DisplayCast cast={crew} key={index} />
      ))}
    </div>
  );
}

function Producer({ showId, token }) {
  const [showCast, setShowCast] = useState([]);
  // const {user} = UserState();

  const getShowCrew = () => {
    fetch(`${API}/TVShows/${showId}`, {
      method: "GET",

    })
      .then((data) => data.json())
      .then((tvShow) => setShowCast(tvShow.producers));
  };

  useEffect(() => getShowCrew(), []);

  const crewContainer = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  };

  return (
    <div style={crewContainer}>
      {showCast.map((crew, index) => (
        <DisplayCast cast={crew} key={index} />
      ))}
    </div>
  );
}

function DisplayCast({ cast }) {
  const picStyles = {
    height: "300px",
    width: "200px",
    objectFit: "cover",
  };
  const castName = {
    fontSize: "15px",
    textAlign: "center",
    fontWeight: "bold",
  };
  const castContainer = {
    border: "10px solid",
  };

  return (
    <div>
      <div style={castContainer}>
        <img style={picStyles} src={cast.pic} alt={cast.name} />
        <p style={castName}>Name : {cast.name}</p>
        <p style={castName}>Gender : {cast.gender}</p>
        <p style={castName}>DOB : {cast.dob}</p>
      </div>
    </div>
  );
}
