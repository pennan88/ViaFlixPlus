import axios from "axios";
import { useEffect, useState } from "react";
import "../views/home/HomeView.css";

interface iProps {
  value: any;
  key: React.Key;
  image: string;
}

export const MovieRow: React.FC<iProps> = ({ value, key, image }) => {
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState("");

  var options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/get-most-popular-movies",
    params: { homeCountry: "US", purchaseCountry: "US", currentCountry: "US" },
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "089092a969msha15ee252d78de78p16f86fjsnb34df78677ef",
    },
  } as any;

  useEffect(() => {
    async function fetchMovieId() {
      axios
        .request(options)
        .then(function (response) {
          setMovieId(response.data);
          console.log()
        })
        .catch(function (error) {
          console.error(error);
        });

      for (let i = 0; i < movieId.length; i++) {
        const element = movieId[i];
        console.log(element)
        var movieOptions = {
          method: "GEt",
          url: `https://imdb-api.com/en/API/Title/k_5er7itwc/${element}`,
        } as any;
        axios
        .request(movieOptions)
        .then(function (response) {
          setMovies(response.data);
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
      }

      movies.map((value) => {
          console.log(value)
      })
    
    }
    fetchMovieId();
  }, []);

  return (
    <div key={key} className="genreContainer">
      <p className="genreTag">{value?.description}</p>
      <div className="imageOuterContainer">
        <div className="imageInnerContainer">
          <img alt="error" src={image} />
        </div>
        <div className="imageInnerContainer">
          <img alt="error" src={image} />
        </div>
        <div className="imageInnerContainer">
          <img alt="error" src={image} />
        </div>
        <div className="imageInnerContainer">
          <img alt="error" src={image} />
        </div>
        <div className="imageInnerContainer">
          <img  alt="error"src={image} />
        </div>
        <div className="imageInnerContainer">
          <img  alt="error"src={image} />
        </div>
        <div className="imageInnerContainer">
          <img  alt="error"src={image} />
        </div>
        <div className="imageInnerContainer">
          <img alt="error" src={image} />
        </div>
      </div>
    </div>
  );
};
