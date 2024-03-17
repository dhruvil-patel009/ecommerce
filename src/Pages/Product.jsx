import React, { useContext, useState } from "react";
import "./Css/Product.css";
import { ProductContext } from "../Context/ProductContext";
import Item from "../Components/Item/Item";
import ProductModal from "../Components/ProductModal/ProductModal";
// import Tada from "react-reveal/Tada";
import { motion } from "framer-motion";

const Product = (props) => {
  const { all_product } = useContext(ProductContext);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const openModal = (productId) => {
    setSelectedProductId(productId);
  };

  const closeModal = () => {
    setSelectedProductId(null);
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="product">
      {/* <Tada> */}
      <div className="products-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <motion.ul
                className="container"
                variants={container}
                initial="hidden"
                animate="visible"
              >
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  onClick={() => openModal(item.id)}
                />
              </motion.ul>
            );
          } else {
            return null;
          }
        })}
      </div>
      {/* </Tada> */}

      {selectedProductId && (
        <ProductModal
          id={selectedProductId}
          onClose={closeModal}
          all_product={all_product}
        />
      )}
    </div>
  );
};

export default Product;
