import React from "react";
import "./styles/header.css";
import offerImg from "./images/offer-img.webp";

function Header() {
  return (
    <header id="showcase">
      <div className="offer-details">
        <h1 className="main-heading">
          Christmas deal: get 68% <br /> off + 3 months FREE
        </h1>
        <a className="deal-btn" href="www.google.com">
          Grab the Deal
        </a>
        <p>
          <i className="fas fa-check-circle"></i> 30-day money-back guarantee
        </p>
      </div>
      <div className="offer-img">
        <img src={offerImg} alt="offer" />
      </div>
    </header>
  );
}

export default Header;
