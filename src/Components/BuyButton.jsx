import React from "react";
import { useState } from "react";

export const BuyButton = () => {
  
  const [initialState, setStatePara] = useState(false);

  const Mostrar = () => {
    setStatePara(!initialState);
  }

  
  return(
    
    <>

    <div className="button-container">
      <button onClick={Mostrar} className="button">Comprar</button>
    
    
    </div>
    
    <div>
     <p>{initialState ? 'Gracias por su compra' : ''}</p> 
    </div>
    
    
    
    
    
    </>



  );
}