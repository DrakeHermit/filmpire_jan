import { Typography, Grow, Tooltip, Rating } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const Movie = ({ movie, i }) => {
  const classes = useStyles();
  console.log(movie, i);

  return (
    // <Grid
    //   container
    //   item
    //   xs={12}
    //   sm={6}
    //   md={4}
    //   lg={3}
    //   xl={2}
    //   className={classes.movie}
    // >
    //   <Typography className={classes.title} variant="h5">
    //     {movie.title}
    //   </Typography>
    // </Grid>
    <h1>I work 222</h1>
  );
};
export default Movie;
