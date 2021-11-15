import { NavLink, useNavigate } from "react-router-dom"
import RoutingPath from "../routes/RoutingPath"

export const Navigation = () => {

    const navigate = useNavigate()
    return (
      <div className="headerWrapper">
        <div className="brand">
          <img src="" alt="bild" />
        </div>
        <div className="navItems">
          <p onClick={() => navigate(RoutingPath.homeView)}>Home</p>
          <p onClick={() => navigate(RoutingPath.movieView)}>Moives</p>
        </div>
      </div>
    );
}
