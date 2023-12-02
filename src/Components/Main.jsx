import React from "react";
import { Imagen } from "./ImageComponent";
import { Details } from "./Details";
import "../Styles/Main.css"

export const Main = () => {
  return(
    
    <>
    <div className="container">
    
    <div className="row">
      <Imagen />
      <Details />
    </div>
    </div>
    
    
    
    
    
    
    </>



  );
}