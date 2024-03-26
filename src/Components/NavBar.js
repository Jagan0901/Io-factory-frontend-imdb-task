import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";

export const NavBar = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const logoutHandler = ()=>{
    localStorage.removeItem("imdb-userInfo");
    navigate("/");
    window.location.reload();
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar className="toolbar-btn">
            <div>
              <Button color="inherit" onClick={() => navigate("/home")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => navigate("/TVShows")}>
                TV Shows
              </Button>
              <Button color="inherit" onClick={() => navigate("/Movies")}>
                Movies
              </Button>
              <Button color="inherit" onClick={() => navigate("/TVShows/add")}>
                AddShows
              </Button>
              <Button color="inherit" onClick={() => navigate("/Movies/add")}>
                AddMovies
              </Button>
            </div>

            {/* <Button
              startIcon={
                mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
              }
              color="inherit"
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "light" ? "dark" : "light"} Mode
            </Button> */}
            <Button startIcon={<LogoutIcon/>} color="inherit" onClick={logoutHandler}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};
