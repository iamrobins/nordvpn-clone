import React from "react";
import "./styles/pricing.css";

function Pricing() {
  return (
    <section id="pricing">
      <div className="pricing-info">
        <h1>
          Grab the Christmas deal:
          <br /> 2-year plan comes with 68% off
        </h1>
        <p>And get 3 extra months of NordVPN on top!</p>
      </div>
      <div className="pricing-card">
        <div className="card">
          <p>2-year plan</p>
          <h3 className="pc-price">
            <span>$</span>3.71
          </h3>
          <p className="pc-price">per month</p>
          <p className="special best">Save 68%</p>
          <p className="extra">+3 months FREE</p>
          <h3 className="mobile-price">$3.71/month</h3>
          <a href="#btn" className="offer-btn btn">
            Get 2-Year Plan
          </a>
          <p>
            <span className="price-red">$286.80</span> $89.00 for the first 2 years
          </p>
        </div>
        <div className="card">
          <p>1-year plan</p>
          <h3 className="pc-price">
            <span>$</span>4.92
          </h3>
          <p className="pc-price">per month</p>
          <p className="special">Save 58%</p>
          <h3 className="mobile-price mobile-price-normal">$4.92/month</h3>
          <a href="#btn" className="btn">
            Get 1-Year Plan
          </a>
          <p>
            <span className="price-red">$143.40</span> $59.00 for the first 2 years
          </p>
        </div>
        <div className="card">
          <p>1-month plan</p>
          <h3 className="pc-price">
            <span>$</span>11.95
          </h3>
          <p className="pc-price">per month</p>
          <p className="special">Save 0%</p>
          <h3 className="mobile-price mobile-price-normal">$11.95/month</h3>
          <a href="#btn" className="btn">
            Get 1-Month Plan
          </a>
          <p>$11.95 billed every month</p>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
