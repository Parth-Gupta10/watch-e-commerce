import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import DetailButton from "./DetailButton";
import {product} from "../context";

const Modal = (props) => {
  const value = useContext(product);

  if (!value.modalOpen) {
    return null;

  } else {

    return (
      <div className="modalContainer">
        <div className="row">
          <div className="col-8 mx-auto col-md-8 col-lg-8 p-4 text-center text-capitalize" id="modal">
            <h4>Added to Cart</h4>
            <img src={process.env.PUBLIC_URL + value.modalProduct.img} className="img-fluid" alt="" style={{margin: "2%"}}/>
            <h5>{value.modalProduct.title}</h5>
            <h5 className="text-muted">price : <i className="fas fa-rupee-sign"></i>{value.modalProduct.price}</h5>
            <div onClick={ () => value.closeModal() } className="modal-btn">
              <Link to="/products">
                <DetailButton btnTxt="Continue Shopping" btnClass= "btn-outline-primary detailBtn" />
              </Link>
            </div>

            <div onClick={ () => value.closeModal() } className="modal-btn">
              <Link to="/cart">
                <DetailButton btnTxt="Go to Cart" btnClass="btn-outline-warning detailBtn" />
              </Link>
            </div>
          </div>
        </div>
      </div>
  )
  }
}

export default Modal;
