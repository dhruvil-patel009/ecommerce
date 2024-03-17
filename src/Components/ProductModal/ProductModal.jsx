import React, { useEffect } from "react";
import Modal from "react-modal";
import "./ProductModal.css";
import Cross from "../Assets/img/Cross.png";

Modal.setAppElement("#root"); // Set the root element for accessibility

const ProductModal = ({ id, onClose, all_product }) => {
  const selectedProduct = all_product.find((item) => item.id === id);

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  if (!selectedProduct) {
    return null;
  }

  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      contentLabel="Product Modal"
      className="product-modal"
      overlayClassName="product-modal-overlay"
    >
      <div className="modal-header">
        <div className="m-header">
          <h2>{selectedProduct.name}</h2>
          <img
            src={Cross}
            alt="crossign"
            className="close-button"
            onClick={onClose}
          />
        </div>
        <hr />
      </div>
      <div className="modal-content">
        <img src={selectedProduct.image} alt="product img" />
        <hr />
        <p>{selectedProduct.desc}</p>
      </div>
    </Modal>
  );
};

export default ProductModal;
