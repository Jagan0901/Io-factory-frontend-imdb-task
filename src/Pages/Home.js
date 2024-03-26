import { NavBar } from "../Components/NavBar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Home() {
  
  const styles = {
    fontSize: "40px",
  };

  const titleStyles = {
    display: "flex",
    justifyContent: "center",
    marginTop: "15%",
  };
 
  return (
    <>
      <NavBar />
      <div style={titleStyles}>
        <h2 style={styles}>Welcome to IMDB app</h2>
        <img
          src="https://cdn.iconscout.com/icon/free/png-128/netflix-5336121-4497702.png"
          alt="Netflix"
        />
      </div>
    </>
  );
}
