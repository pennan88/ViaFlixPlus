import { useNavigate } from "react-router-dom";
import RoutingPath from "../routes/RoutingPath";
import "./Navigation.css";
import logo from "../shared/images/Group 1.svg";
import profileIcon from "../shared/images/ProfileIcon.svg";

import { GiMagnifyingGlass } from "react-icons/gi";
import { BsFillBellFill } from "react-icons/bs";
import { GoArrowSmallUp } from "react-icons/go";

export const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="innerHeader">
        <div className="brand">
          <img src={logo} alt="bild" />
        </div>

        <div className="navList">
          <p className="navItem" onClick={() => navigate(RoutingPath.homeView)}>
            Hem
          </p>
          <p
            className="navItem"
            onClick={() => navigate(RoutingPath.movieView)}
          >
            Serier
          </p>
          <p
            className="navItem"
            onClick={() => navigate(RoutingPath.movieView)}
          >
            Filmer
          </p>
          <p
            className="navItem"
            onClick={() => navigate(RoutingPath.movieView)}
          >
            Nytt och populärt
          </p>
          <p
            className="navItem"
            onClick={() => navigate(RoutingPath.movieView)}
          >
            Min lista
          </p>
          <p
            className="navItem"
            onClick={() => navigate(RoutingPath.movieView)}
          >
            Titta igen
          </p>
        </div>

        <div className="navListTwo">
          <div className="imgContainer">
            <GiMagnifyingGlass className="icon" />
          </div>
          <div className="imgContainer">
            <BsFillBellFill className="icon" />
          </div>

          <div className="imgContainer">
            <img src={profileIcon} alt="bild" />
            <GoArrowSmallUp className="tinyArrow" />
          </div>
        </div>
      </div>
    </div>
  );
};
