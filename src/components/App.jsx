import { CssBaseline } from "@mui/material";
import NavBar from "./NavBar/NavBar";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
    </div>
  );
};
export default App;
