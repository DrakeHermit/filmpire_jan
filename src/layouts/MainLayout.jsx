import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import useStyles from "../components/styles";

const MainLayout = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <NavBar />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Outlet />
        </main>
      </div>
    </>
  );
};
export default MainLayout;
