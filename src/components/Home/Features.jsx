import React from "react";
import "./styles/features.css";
import featuresIMG from "./images/man-sitting-on-cloud.webp";

function Features() {
  return (
    <section id="features">
      <div className="features-info">
        <h2 className="m-heading">
          Get secure and private
          <br />
          access to the internet
        </h2>
        <p className="lead">A VPN service provides you a secure, encrypted tunnel for online traffic to flow. Nobody can see through the tunnel and get their hands on your internet data. NordVPN is the best VPN if you’re looking for a peace of mind when you use public Wi-Fi, access personal and work accounts on the road, or want to keep your browsing history to yourself.</p>
        <a className="btn-secondary" href="#features">
          See All Features
        </a>
      </div>
      <div className="features-img">
        <img src={featuresIMG} alt="features" />
      </div>
    </section>
  );
}

export default Features;
