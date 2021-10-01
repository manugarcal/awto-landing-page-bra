import React from "react";
import ScrollIcon from '../assets/ic-scroll.svg'
import imgAwtoMainHeader from '../assets/img-awto.webp'

const Header = () => {
  return (
    <section className="flex justify-between flex-wrap mv2 mv5-l">
      <div className="w-100 w-50-l">
        <h1 className="text-color-blue tc tl-l f2 f1-l">Você quer fazer parte de uma tendência global?</h1>
        <p className="text-color-gray f6 fw5 tc tl-l">
          O principal sistema de compartilhamento de carros da América Latina
          chegará em breve ao Brasil
        </p>
        <div className="headerInpurContainer w-100 w-80-l flex mv5">
          <input className="headerInput w-70 w-80-l" type="text" />
          <input className="btnSubmit w-30 w-20-l" type="submit" />
        </div>
        <div className="flex justify-center justify-start-l">
          <img src={ScrollIcon} alt="Scroll Icon" />
          <span className="text-color-blue mh3">Explorar para mais informação</span>
        </div>
      </div>
      <div className="w-100 w-50-l">
          <picture>
            <source srcset={imgAwtoMainHeader} type="image/webp"/>
            <img src={imgAwtoMainHeader} alt="Awto" />
          </picture>
      </div>
    </section>
  );
};
export default Header;
