import { LikeDislike } from "../Components/LikeDislike";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { API } from "../api";

function MoviesList({ webSeries, refresh, token }) {
  const [show, setShow] = useState(true);

  const ratingStyles = {
    color:
      webSeries.rating >= 9
        ? "darkGoldenrod"
        : webSeries.rating >= 8
        ? "green"
        : "red",
    fontWeight: "bold",
  };
  const likeDeleteEdit = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  };
  // const summaryStyles = {
  //   display: show ? 'block' : 'none'
  // }
  // const [navigate,setNavigate] = useNavigate()
  const navigate = useNavigate();
  return (
    <>
      <div className="webSeries-container">
        <img
          className="webSeries-poster"
          src={webSeries.poster}
          alt={webSeries.name}
        />
        <div className="webSeries-specs">
          <div className="webSeries-N-btn">
            <h3 className="webSeries-name">
              {webSeries.name}- {webSeries.year}
            </h3>
            <IconButton onClick={() => setShow(!show)}>
              {show ? (
                <ExpandLessIcon className="webSeries-toggle" />
              ) : (
                <ExpandMoreIcon className="webSeries-toggle" />
              )}
            </IconButton>
            <IconButton
              aria-label="info"
              color="primary"
              onClick={() => navigate(`/Movies/${webSeries.id}`)}
            >
              <InfoIcon className="webSeries-info" />
            </IconButton>
          </div>
          <p className="webSeries-rating" style={ratingStyles}>
            ⭐{webSeries.rating}{" "}
          </p>
        </div>
        {show ? <p className="webSeries-summary">{webSeries.summary}</p> : ""}
        <div style={likeDeleteEdit}>
          <LikeDislike />
          <div>
            <IconButton
              aria-label="delete"
              color="error"
              onClick={() =>
                fetch(`${API}/Movies/${webSeries.id}`, {
                  method: "DELETE",
                  headers: {
                    "x-auth-token": `${token}`,
                  },
                }).then(() => refresh())
              }
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              aria-label="edit"
              color="secondary"
              onClick={() => navigate(`/Movies/edit/${webSeries.id}`)}
            >
              <EditIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
}

export { MoviesList };
