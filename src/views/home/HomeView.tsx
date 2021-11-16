import "./HomeView.css";
// import mainImage from "../../shared/images/PacifigRim.jpg";
import mainImage from "../../shared/images/central.jpg";
import movieLogo from "../../shared/images/Centrallogo.png";
import placeholader from "../../shared/images/placeholder.png";
import { useEffect, useState } from "react";
import axios from "axios";

export const HomeView = () => {
  const [genre, setGenre] = useState() as any;
  const [isLoaded, setIsload] = useState(false);
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
          setIsload(true);
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
        <img className="mainImage" src={mainImage}></img>
      </div>
      <div className="mainContentContainer">
        <div className="mainInnerContentContainer">
          <div className="movieLogo">
            <img src={movieLogo}></img>
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
              <div key={i} className="genreContainer">
                <p className="genreTag">{value?.description}</p>
                <div className="imageOuterContainer">
                  <div className="imageInnerContainer">
                    <img src={placeholader} />
                  </div>
                  <div className="imageInnerContainer">
                    <img src={placeholader} />
                  </div>
                  <div className="imageInnerContainer">
                    <img src={placeholader} />
                  </div>
                  <div className="imageInnerContainer">
                    <img src={placeholader} />
                  </div>
                  <div className="imageInnerContainer">
                    <img src={placeholader} />
                  </div>
                  <div className="imageInnerContainer">
                    <img src={placeholader} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
