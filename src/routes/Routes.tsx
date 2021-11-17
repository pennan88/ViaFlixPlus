import {
  BrowserRouter, Route, Routes as Switch
} from "react-router-dom";
import { HomeView } from "../views/home/HomeView";
import { MoviesView } from "../views/movies/MoviesView";
import RoutingPath from "./RoutingPath";

export const Routes = ({children} : any) => {
  return (
    <BrowserRouter>
        {children}
      <Switch>
        <Route path={RoutingPath.homeView} element={<HomeView />}>
          home
        </Route>
        <Route path={RoutingPath.movieView} element={<MoviesView />}>
          movies
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
