import React from "react";
import "./styles/privacy.css";

function Privacy() {
  return (
    <section id="privacy">
      <div className="privacy-img">
        <img src="/images/man-room-devices-secured.webp" alt="privacy" />
      </div>

      <div className="privacy-info">
        <h2 className="m-heading">Protect all your devices</h2>
        <p className="lead">Do you use Windows at work, macOS at home, and Linux for your special projects? No problem. There’s a NordVPN application for each of these, plus apps for iOS, Android, and Android TV. Oh, and also encrypted proxy extensions for Chrome and Firefox. Best of all, with one NordVPN account, you can secure up to 6 devices at the same time.</p>

        <div className="available-platforms">
          <h4>Available on:</h4>
          <i class="fab fa-android"></i>
          <i class="fab fa-windows"></i>
          <i class="fab fa-apple"></i>
          <i class="fab fa-firefox-browser"></i>
          <i class="fab fa-chrome"></i>
          <i class="fab fa-linux"></i>
        </div>

        <a className="btn-secondary" href="#privacy">
          Choose Your Apps
        </a>
      </div>
    </section>
  );
}

export default Privacy;
