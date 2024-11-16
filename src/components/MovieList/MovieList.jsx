import Grid from "@mui/material/Grid2";

import useStyles from "./styles";
import Movie from "../Movie/Movie";

const MovieList = ({ movies }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};
export default MovieList;
