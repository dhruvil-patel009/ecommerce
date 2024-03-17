import React, { useState } from "react";
import "./popular.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";
import ProductModal from "../ProductModal/ProductModal";
import { Link } from "react-router-dom";
import { useMenu } from "../../MenuContext"; // Update the path accordingly
import { motion } from "framer-motion";

const Popular = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const { updateMenu } = useMenu();

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
    <div className="popular">
      <h1>Popular Product</h1>
      <hr />

      <div className="popular-item">
        {data_product.map((item, i) => (
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
        ))}
      </div>

      <Link style={{ textDecoration: "none" }} to="/about_us">
        {" "}
        <a className="btn" href="#/" onClick={() => updateMenu("about_us")}>
          View All Product &nbsp;
          <span
            role="img"
            aria-label="arrow-right"
            className="anticon anticon-arrow-right"
          >
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="arrow-right"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"></path>
            </svg>
          </span>
        </a>
      </Link>

      {selectedProductId && (
        <ProductModal
          id={selectedProductId}
          onClose={closeModal}
          all_product={data_product} // Pass your product data here
        />
      )}
    </div>
  );
};

export default Popular;
