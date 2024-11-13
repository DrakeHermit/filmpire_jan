import useStyles from "../components/styles";
import { useState, useEffect } from "react";
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

const tmdbApiKey = import.meta.env.REACT_APP_TMDB_KEY;

import { useGetMoviesQuery } from "../services/TMDB";

const HomePage = () => {
  const classes = useStyles();

  const { data } = useGetMoviesQuery();

  console.log(data);
  console.log(tmdbApiKey);

  return <div className={classes.root}>Movies</div>;
};
export default HomePage;
