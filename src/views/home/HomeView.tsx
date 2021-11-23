import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { MovieRow } from "../../components/MovieRow";
import mainImage from "../../shared/images/central.jpg";
import movieLogo from "../../shared/images/Centrallogo.png";
import placeholader from "../../shared/images/placeholder.png";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "./HomeView.css";

export const HomeView = () => {
  const [genre, setGenre] = useState([]) as any;
  const [movies, setMovies] = useState<AxiosResponse>();

  const fetchOne = async () => {
    const { data } = await axios.get(
      "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup",
      {
        params: { source_id: "tt3398228", source: "imdb", country: "us" },
        headers: {
          "x-rapidapi-host":
            "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "089092a969msha15ee252d78de78p16f86fjsnb34df78677ef",
        },
      }
    );
    console.log(data);
    setMovies(data);
  };

  const fetchPopularMovies = async () => {
    try {
      const {data} = await axios.get(
        "https://imdb8.p.rapidapi.com/title/get-most-popular-movies",
        {
          params: {
            homeCountry: "US",
            purchaseCountry: "US",
            currentCountry: "US",
          },
          headers: {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key":
              "c930b48b43mshafd522ac12c11adp166c44jsndd74a3102d46",
          },
        }
      );
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  const fetchGenre = async () => {
    try {
      const { data } = await axios.get(
        "https://imdb8.p.rapidapi.com/title/list-popular-genres",
        {
          headers: {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key":
              "c930b48b43mshafd522ac12c11adp166c44jsndd74a3102d46",
          },
        }
      );
      setGenre(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGenre();
    fetchOne();
    fetchPopularMovies();
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
            return <MovieRow image={placeholader} key={i} value={value?.description} />;
          })}
        </div>
      </div>
    </div>
  );
};
