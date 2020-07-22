import React from 'react';
import {Link} from 'react-router-dom';
import DetailButton from './DetailButton';
// import home from './img1/home';

const Home = (props) => {
  return (
  <div className="jumbotron">
    <h1 className="display-2 text-capitalize"><b>Styme</b></h1>
    <p className="lead">You're in good hands on our watch</p>
    <hr className="my-3"/>
    <Link to="/products">
      <DetailButton btnTxt ="Shop now" btnClass= "btn-outline-light btn-lg homeBtn"/>
    </Link>
  </div>
);
}

export default Home;
