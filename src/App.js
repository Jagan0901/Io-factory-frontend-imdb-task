// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { WebSeriesDetail } from "./Pages/WebSeriesDetail";
import { MovieDetail } from "./Pages/MovieDetail";
import { Add_TV_Shows } from "./Pages/Add_TV_Shows";
import { Add_Movies } from "./Pages/Add_Movies";
import { Home } from "./Pages/Home";
import { TV_Shows } from "./Pages/TV_Shows";
import { Movies } from "./Pages/Movies";
import { NotFoundPage } from "./Components/NotFoundPage";
import { EditMovies } from "./Pages/EditMovies";
import { EditShows } from "./Pages/EditShows";
import { Login } from "./Pages/Login";
import { SignUp } from "./Pages/SignUp";


function App() {


  return (
    <div className="App">

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/TVShows" element={<TV_Shows />} />
          <Route path="/TVShows/:showId" element={<WebSeriesDetail />} />
          <Route path="/TVShows/edit/:showId" element={<EditShows />} />
          <Route
            path="/webseries"
            element={<Navigate replace to="/TVShows" />}
          />
          <Route path="/series" element={<Navigate replace to="/TVShows" />} />
          <Route path="/TVShows/add" element={<Add_TV_Shows />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/films" element={<Navigate replace to="/Movies" />} />
          <Route path="/Movies/:movieId" element={<MovieDetail />} />
          <Route path="/Movies/add" element={<Add_Movies />} />
          <Route path="/Movies/edit/:movieId" element={<EditMovies />} />
          {/* <Route path="/form" element={<BasicForm />} /> */}
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
    </div>
  );
}

export default App;
