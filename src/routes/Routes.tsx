import {
  BrowserRouter, Route, Routes as Switch
} from "react-router-dom";
import { HomeView } from "../views/home/HomeView";
import { LastestView } from "../views/latest/LastestView";
import { MoviesView } from "../views/movies/MoviesView";
import MyListView from "../views/mylist/MyListView";
import { SeriesView } from "../views/series/SeriesView";
import { WatchAgainView } from "../views/watchagain/WatchAgainView";
import RoutingPath from "./RoutingPath";

export const Routes = ({children} : any) => {
  return (
    <BrowserRouter>
        {children}
      <Switch>
        <Route path={RoutingPath.browseView} element={<HomeView />}/>
        <Route path={RoutingPath.movieView} element={<MoviesView />}/>
        <Route path={RoutingPath.seriesView} element={<SeriesView />}/>
        <Route path={RoutingPath.listView} element={<MyListView />}/>
        <Route path={RoutingPath.lastetView} element={<LastestView />}/>
        <Route path={RoutingPath.watchAgainView} element={<WatchAgainView />}/>
      </Switch>
    </BrowserRouter>
  );
};
