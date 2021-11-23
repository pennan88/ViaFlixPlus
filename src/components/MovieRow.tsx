import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import "../views/home/HomeView.css";

interface iProps {
  value: any;
  key: React.Key;
  image: string;
}

export const MovieRow: React.FC<iProps> = ({ value, key, image }) => {
  return (
    <div key={key} className="genreContainer">
      <p className="genreTag">{value}</p>
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
