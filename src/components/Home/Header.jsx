import React from "react";
import "./styles/header.css";

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
        <img src="/images/offer-img.webp" alt="offer" />
      </div>
    </header>
  );
}

export default Header;
