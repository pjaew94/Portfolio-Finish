import { FC } from "react";

import logoSvg from "../../media/logoSvg.svg";
import "./Landing.scss";

const Landing: FC = () => {
  return (
    <div className="section-container">
      <div className="section-content home-section-content">
        <img className="logo" src={logoSvg} alt="JW.P Logo" />
        <div className="home-text-container">
          <div className="home-text-container-left">
            <h2>Jae Park</h2>
            <h2>Web Developer</h2>
          </div>
          <div className="home-text-container-right">
            <h2>Exceptional Quality.</h2>
            <h2>Built with Purpose.</h2>
            <h2>Created for You.</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
