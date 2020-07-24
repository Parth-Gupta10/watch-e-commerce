import React, { useContext } from 'react';
// import storeProducts from "./src/data.js";
import {Link} from "react-router-dom";
// import {handleDetail} from "./Details";
import {product} from "../context";


const Product = (props) => {

  const value = useContext(product);

  return (
  <div className="col mb-4">
    <div className="card">
      <div className="img-container" onClick={() => value.handleDetail(props.id)}>
        <Link to="/details">
          <img src={process.env.PUBLIC_URL + props.img} className="card-img-top" alt="Product"/>
        </Link>
      </div>
      <div className="card-footer">
        <div className="row">
          <div className="col-8">
            <h5>{props.title}</h5>
          </div>
          <div className="col-4">
            <i className="fas fa-rupee-sign"></i>{props.price}
          </div>
        </div>
      </div>
    </div>
    <button className="btn btn-primary cart-btn" onClick={() => {value.addToCart(props.id); value.openModal(props.id);}} disabled={props.inCart ? true : false}>
      {props.inCart ?
        (
          <p className="text-capitalize mb-0 disabled" disabled="disabled">
            in cart
          </p>
        )
        : (<i className="fas fa-cart-plus"/>)
      }
    </button>
  </div>
);
}

export default Product;
