import React from "react";
import "./Item.css";

const Item = (props) => {
  return (
    <div className="item" onClick={props.onClick}>
      <div className="item-img">
        <img
          src={props.image}
          alt="product img"
          className="is-img-loaded"
          onClick={window.scrollTo(0, 0)}
        />
      </div>
      <p>{props.name}</p>
    </div>
  );
};

export default Item;
