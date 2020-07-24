import React, { useContext } from 'react';
import {product} from "../context";

const CartList = (props) => {
  const value = useContext(product);

  if (window.innerWidth <= 450) {
    return (
      <div className="row cartList-row" style={{textAlign: 'center'}}>
        <div className="col-5 product-name product">
          {props.title} <br />
        <p className="text-muted"> <i className="fas fa-rupee-sign"></i>{props.price}</p>
        </div>
        <div className="col-3 product-quantity product">
          <span className="quantityBtn minus" onClick={() => value.decreaseCount(props.id)}><i className="fas fa-minus"></i></span>
          <span className="quantity">{props.count}</span>
          <span className="quantityBtn plus" onClick={() => value.increaseCount(props.id)}><i className="fas fa-plus"></i></span>
        </div>
        <div className="col-2 product-remove product" style={{fontSize: '1.3rem'}} onClick={() => value.removeFromCart(props.id)}>
          <i className="fas fa-trash" style={{color: '#f2a365', cursor: 'pointer'}}></i>
        </div>
        <div className="col-2 product-amt product">
          <i className="fas fa-rupee-sign"></i>{props.price * props.count}
        </div>
      </div>
    );
  } else {

  }

  return (
    <div className="row cartList-row" style={{textAlign: 'center'}}>
      <div className="col-2 product-img product">
        <img className="img-fluid" src={process.env.PUBLIC_URL + props.img} alt="..."/>
      </div>
      <div className="col-3 product-name product">
        {props.title}
      </div>
      <div className="col-2 product-price product">
        <i className="fas fa-rupee-sign"></i>{props.price}
      </div>
      <div className="col-2 product-quantity product">
        <span className="quantityBtn minus" onClick={() => value.decreaseCount(props.id)}><i className="fas fa-minus"></i></span>
        <span className="quantity">{props.count}</span>
        <span className="quantityBtn plus" onClick={() => value.increaseCount(props.id)}><i className="fas fa-plus"></i></span>
      </div>
      <div className="col-1 product-remove product" style={{fontSize: '1.3rem'}} onClick={() => value.removeFromCart(props.id)}>
        <i className="fas fa-trash" style={{color: '#f2a365', cursor: 'pointer'}}></i>
      </div>
      <div className="col-2 product-amt product">
        <i className="fas fa-rupee-sign"></i>{props.price * props.count}
      </div>
    </div>
  )
}

export default CartList;
