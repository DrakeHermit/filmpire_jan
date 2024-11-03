import { CssBaseline } from "@mui/material";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import useStyles from "../components/styles";
import HomePage from "../pages/HomePage";
import MainLayout from "../layouts/MainLayout";
import MovieInformation from "../pages/MovieInformation";
import Profile from "../pages/Profile";
import Actors from "../pages/Actors";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/movie/:id" element={<MovieInformation />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/actors/:id" element={<Actors />} />
    </Route>
  )
);

const App = () => {
  const classes = useStyles();

  return (
    <RouterProvider router={router}>
      <CssBaseline />
    </RouterProvider>
  );
};
export default App;
