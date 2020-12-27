import React from "react";
import "./styles/performance.css";
import performanceIMG from "./images/man-browsing-world-flags.webp";

function Performance() {
  return (
    <section id="performance">
      <div className="performance-info">
        <h2 className="m-heading">
          Enjoy fast and stable
          <br />
          connection anywhere
        </h2>
        <p className="lead">Buffering is the ultimate buzzkill, so streaming or downloading files with a slow internet connection is not an option. No worries — you just need a VPN service that offers a fast connection with no limits on bandwidth. You need NordVPN. Choose from over 5400 NordVPN servers in 59 countries and enjoy the fastest VPN experience. Having more servers means less load, and the wide variety of locations means there’s a higher chance you’ll find one nearby.</p>
        <a className="btn-secondary" href="#performance">
          Check Locations
        </a>
      </div>
      <div className="performance-img">
        <img src={performanceIMG} alt="performance" />
      </div>
    </section>
  );
}

export default Performance;
