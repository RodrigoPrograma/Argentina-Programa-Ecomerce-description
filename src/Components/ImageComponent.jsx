import React from "react";
import vestido from "../assets/vestido.webp"
import "../Styles/ImageComponent.css"


export const Imagen = () => {
  return (

  <div className="ImageContainer"> 
    <img src={vestido} alt="" />
  </div>


  );
}