import { useEffect, useState } from "react";
import TMDBService from "../shared/api/service/tmdbmovieservice/TMDBService";
import "../views/home/HomeView.css";

interface iProps {
  value: any;
  key: React.Key;
  image?: string;
}
const api_key = "93427f72f2168e4ae6c79af3fa1b3577";

export const MovieRow: React.FC<iProps> = ({ value, key, image }) => {
  const [movies, setMovies] = useState([]) as any;

  const fetchPopularMovies = async () => {
    try {
      const { data } = await TMDBService.getPopularMoive(api_key, "en", "1");
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <div key={key} className="genreContainer">
      <p className="genreTag">{value}</p>
      <div className="imageOuterContainer">
        {movies.map((value: any, index: any) => {
          return (
            <div key={index} className="imageInnerContainer">
              <img
                alt="error"
                src={
                  `https://image.tmdb.org/t/p/w500/${value?.poster_path}` || "0"
                }
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
