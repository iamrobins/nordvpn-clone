import React from "react";
import "./styles/sponsors.css";

//companies starts
import huffington from "./images/companies/huffington-post.svg";
import pcmag from "./images/companies/pcmag-ec.svg";
import wired from "./images/companies/wired.svg";
import buzzfeed from "./images/companies/buzzfeed.svg";
import forbes from "./images/companies/forbes.svg";
import cnet from "./images/companies/cnet.svg";
import yahoo from "./images/companies/yahoo-tech.svg";
import bbc from "./images/companies/bbc.svg";
import entrepreneur from "./images/companies/entrepreneur.svg";
import tedx from "./images/companies/tedx.svg";
import bInsider from "./images/companies/business-insider.svg";
import tnw from "./images/companies/tnw.svg";

//companies ends

function Sponsors() {
  return (
    <section id="sponsors">
      <h2>They talk about us</h2>
      <div className="sponsors-imgs">
        <img src={huffington} alt="huffington-post" />
        <img src={pcmag} alt="pcmag-ec" />
        <img src={wired} alt="wired" />
        <img src={buzzfeed} alt="buzzfeed" />
        <img src={forbes} alt="forbes" />
        <img src={cnet} alt="cnet" />

        <img src={yahoo} alt="yahoo-tech" />
        <img src={bbc} alt="bbc" />
        <img src={entrepreneur} alt="entrepreneur" />
        <img src={tedx} alt="tedx" />
        <img src={bInsider} alt="business-insider" />
        <img src={tnw} alt="tnw" />
      </div>
    </section>
  );
}

export default Sponsors;
