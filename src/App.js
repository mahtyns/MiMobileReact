import React from "react";
import Routing from "./Routing";
import { useState } from "react";
// import { queryClient, QueryClientProvider, useQuery} from 'react-query'

// const qClient = new queryClient();

function App() {

  const [productsInCartNumber, setProductsInCartNumber] = useState(0);
  const [productsInCart, setProductsInCart] = useState([])
  const [memoryCode, setMemoryCode] = useState()
  const [colorCode, setColorCode] = useState()

  // const getProducts = async () => {
  //     const res = await fetch('https://front-test-api.herokuapp.com/api/product');
  //     return res.json();
  // }

  // const {data, status} = useQuery('products', getProducts);

  // if(status === 'loading') {
  //   return console.log('Loading');
  // }

  // if(status === 'error') {
  //   return console.log('error')
  // }

  const addItemToCart = (addedItemId) => {
    let newItemInCart = {
      product_id: addedItemId, 
      memory_code: memoryCode, 
      color_code: colorCode
    }
    setProductsInCartNumber(productsInCartNumber + 1);
    setProductsInCart([...productsInCart, newItemInCart]);
    setMemoryCode();
    setColorCode();
    console.log(productsInCart)
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
