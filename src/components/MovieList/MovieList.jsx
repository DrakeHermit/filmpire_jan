import { Grid2 } from "@mui/material";

import useStyles from "./styles";
import Movie from "../Movie/Movie";

const MovieList = ({ movies }) => {
  const classes = useStyles();

  return (
    // <Grid2 container className={classes.moviesContainer}>
    //   {movies.results.map((movie, i) => {
    //     <Movie key={i} movie={movie} i={i} />;
    //   })}
    // </Grid2>
    <Movie />
  );
};
export default MovieList;
