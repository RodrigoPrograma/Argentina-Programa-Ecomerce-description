import React from "react";
import { BuyButton } from "./BuyButton";

export const Details = () => {
  return (
    <div className="detailsContainer">
      <div> <h3></h3></div>
      <div><h1 className="details-title">Vestido elegante largo negro</h1></div>
      <br className="separation" />
      <div>
        <h2 className="price">$80.000ARS</h2>
      
      </div>
      
      <div className="description">
      <h3 className="descriptionTitle">Descripcion:</h3>
      <p>Vestido negro ideal para fiestas, bodas, cumpleaños y celebraciones. Puedes personalizar tu vestido a tu medida</p>
      <br />
      <p>Cantidad disponible: 20 prendas</p>
      <p className="SKU"> SKU: #336481B</p>
      </div>
    
   

    </div>



  );
}