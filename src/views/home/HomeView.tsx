import axios from "axios";
import { useEffect, useState } from "react";
import { MovieRow } from "../../components/MovieRow";
// import mainImage from "../../shared/images/PacifigRim.jpg";
import mainImage from "../../shared/images/central.jpg";
import movieLogo from "../../shared/images/Centrallogo.png";
import placeholader from "../../shared/images/placeholder.png";
import "./HomeView.css";

export const HomeView = () => {
  const [genre, setGenre] = useState() as any;
  var options = {
    method: "GET",
    url: "https://imdb8.p.rapidapi.com/title/list-popular-genres",
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "c930b48b43mshafd522ac12c11adp166c44jsndd74a3102d46",
    },
  } as any;

  useEffect(() => {
    async function fetchMenu() {
      axios
        .request(options)
        .then(function (response) {
          setGenre(response.data.genres);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    fetchMenu();
  }, []);

  console.log(genre);
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
            <div className="btn btn-play">Spela upp</div>
            <div className="btn btn-info">Mer info</div>
          </div>
        </div>

        <div className="mainOuterContentContainer">
          {/* <p>{genre?.[0].description}</p> */}
          {genre?.map((value: any, i: any) => {
            return (
              <MovieRow image={placeholader} key={i} value={value} />
              
            );
          })}
        </div>
      </div>
    </div>
  );
};
