import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { MovieRow } from "../../components/MovieRow";
import TMDBService from "../../shared/api/service/tmdbmovieservice/TMDBService";
import mainImage from "../../shared/images/central.jpg";
import movieLogo from "../../shared/images/Centrallogo.png";
import "./HomeView.css";

const api_key = "93427f72f2168e4ae6c79af3fa1b3577";

export const HomeView = () => {
  const [genre, setGenre] = useState([]) as any;

  const fetchGenre = async () => {
    try {
      const { data } = await TMDBService.getGenre(api_key, "en-us")
      setGenre(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGenre();
  }, []);
  return (
    <div className="heroWrapper">
      
      <div className="mainImageContainer">
        <img className="mainImage" alt="error" src={mainImage}></img>
      </div>
      <div className="mainContentContainer">
        <div className="mainInnerContentContainer">
          <div className="movieLogo">
            <img src={movieLogo} alt="error"></img>
          </div>
          <div className="movieDescription">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget ex eget magna tincidunt accumsan. Cras purus justo, commodo
              nec consequat non, fermentum eget enim. Praesent at risus sed
              massa feugiat malesuada et vitae urna. Cras risus mi, dignissim in
              nisi quis, vulputate pulvinar lacus. Sed mattis tempus commodo.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              congue auctor imperdiet.
            </p>
          </div>
          <div className="btnContainer">
            <div className="btn btn-play">
              <span className="span">
                <FaPlay className="icons" /> Spela upp
              </span>
            </div>
            <div className="btn btn-info">
              <span className="span">
                <AiOutlineInfoCircle className="icons" /> Mer info
              </span>
            </div>
          </div>
        </div>

        <div className="mainOuterContentContainer">
          {genre?.genres?.map((value: any, i: any) => {
            return <MovieRow key={i} value={value?.name} />;
          })}
        </div>
      </div>
    </div>
  );
};
