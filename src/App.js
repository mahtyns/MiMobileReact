import React from "react";
import Routing from "./Routing";
import { useState } from "react";

function App() {

  const [productsInCartNumber, setProductsInCartNumber] = useState(0);
  const [productsInCart, setProductsInCart] = useState([])
  const [memoryCode, setMemoryCode] = useState()
  const [colorCode, setColorCode] = useState()

  const addItemToCart = (addedItemId) => {
    let newItemInCart = {
      product_id: addedItemId, 
      // memory_code: memoryCode, 
      // color_code: colorCode
    }
    setProductsInCartNumber(productsInCartNumber + 1);
    setProductsInCart([...productsInCart, newItemInCart])
  }

  const chooseMemory = (e) => {
    setMemoryCode(e.target.value);
  }

  const chooseColor = (e) => {
    setColorCode(e.target.value);
  }

  return (
    <div>
      <Routing 
      productsInCartNumber={productsInCartNumber}
      addItemToCart={addItemToCart}
      chooseMemory={chooseMemory}
      chooseColor={chooseColor}
      />
    </div>
  );
}

export default App;
