import useStyles from "../components/styles";
import { useState, useEffect } from "react";
import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import MovieList from "../components/MovieList/MovieList";

import { useGetMoviesQuery } from "../services/TMDB";

const HomePage = () => {
  const classes = useStyles();

  const { data, error, isFetching } = useGetMoviesQuery();

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies that match that name.
          <br />
          Please search for something else.
        </Typography>
      </Box>
    );
  }

  if (error) {
    return "An error has occured.";
  }

  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};
export default HomePage;
