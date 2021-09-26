import React from "react";
import ScrollIcon from '../assets/ic-scroll.svg'

const Header = () => {
  return (
    <section className="header">
      <div>
        <h1 className="headerTitle">Você quer fazer parte de uma tendência global?</h1>
        <p className="headerSubtitle">
          O principal sistema de compartilhamento de carros da América Latina
          chegará em breve ao Brasil
        </p>
        <div className="headerInpurContainer">
          <input className="headerInput" type="text" />
          <input className="btnSubmit" type="submit" />
        </div>
        <div className="moreInfoContainer">
        <img src={ScrollIcon} alt="Scroll Icon" />
        <span className="moreInfoText">Explorar para mais informação</span>
        </div>
      </div>
      <div>
          image
      </div>
    </section>
  );
};
export default Header;
