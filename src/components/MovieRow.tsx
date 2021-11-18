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
  const [loading, setLoading] = useState(false);

  var options = {
    method: "GET",
    url: "https://imdb-api.com/en/API/Top250Movies/k_5er7itwc",
  } as any;

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setLoading(true);
    axios
      .request(options)
      .then(function (response) {
        setMovies(response.data.items);
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  console.log(movies);
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
      </div>
    </div>
  );
};
