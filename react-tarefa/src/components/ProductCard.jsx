function ProductCard(props) {
  return (
    <div className="product-card">
      <img src={props.image} alt={props.name} width="200" />

      <h3>{props.name}</h3>

      <p>{props.description}</p>

      <strong>R$ {props.price}</strong>
    </div>
  );
}

export default ProductCard;

import { useState } from "react";

