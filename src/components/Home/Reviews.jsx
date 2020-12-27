import React from "react";
import "./styles/reviews.css";
import philip from "./images/phillip-defranco.webp";
import elric from "./images/elric-phares.webp";
import dave from "./images/dave-taylor.webp";

function Reviews() {
  return (
    <section id="reviews">
      <div className="reviews-info">
        <h2>The service reviews are in</h2>
        <p className="lead">Find out what YouTube content creators have to say about NordVPN.</p>
      </div>

      <div className="reviews-imgs">
        <div className="review-1">
          <img src={philip} alt="phillip-review" />
          <p className="review-title">
            “You should 100% be using a VPN!”
            <br />
            <span className="review-author">Phillip DeFranco</span>
          </p>
        </div>
        <div className="review-2">
          <img src={elric} alt="elric-review" />
          <p className="review-title">
            “Never feel unsafe online, wherever you are!”
            <br />
            <span className="review-author">Elric Phares · Tech of Tomorrow</span>
          </p>
        </div>
        <div className="review-3">
          <img src={dave} alt="dave-review" />
          <p className="review-title">
            “With NordVPN, you can just launch it and forget about it!”
            <br />
            <span className="review-author">Dave Taylor · vpnMentor</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
