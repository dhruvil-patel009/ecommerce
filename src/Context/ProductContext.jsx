import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product";

export const ProductContext = createContext(null);

const ProductContextProvider = (props) => {
  const contexValue = { all_product };

  return (
    <ProductContext.Provider value={contexValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
