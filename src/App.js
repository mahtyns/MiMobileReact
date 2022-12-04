import React from "react";
import Routing from "./Routing";
import { useState } from "react";

function App() {

  const [productsInCartNumber, setProductsInCartNumber] = useState(0)

  const addItemToCart = () => {
    setProductsInCartNumber(productsInCartNumber + 1)
    console.log(productsInCartNumber)
  }

  return (
    <div>
      <Routing 
      productsInCartNumber={productsInCartNumber}
      addItemToCart={addItemToCart}
      />
    </div>
  );
}

export default App;
