import React from "react";
import pilarEconomico from "../assets/pilar-economico.svg";
import pilarPratico from "../assets/pilar-pratico.svg";
import pilarSocial from "../assets/pilar-social.svg";


const OurPillars = () => {
  return (
    <section className="ourPillarsContainer container">
      <div className="ourPillarsTitle">
        <p className="secondaryText">Nossos pilares</p>
        <h3 className="primaryTitle">
          Economia, praticidade e responsabilidade com uma nova maneira de se
          locomover
        </h3>
        <div className="infoCardContainer">
          <div className="infoCard1 cardShape">
          <div className="infoCardImg">
          <img src={pilarEconomico} alt="Pilar Economico" />
          </div>
          <p className="primaryText">Economico</p>
          <p className="secondaryText">Com Awto você tem todos os benefícios de um carro, sem os coustos de tê-lo</p>
          </div>
          <div className="infoCard2 cardShape">
          <div className="infoCardImg">
          <img src={pilarPratico} alt="Pilar Pratico" />
          </div>
          <p className="primaryText">Prático</p>
          <p className="secondaryText">Gerencie seu tempo e desfrute da liberdade de não depender de outra pessoa</p>
          </div>
          <div className="infoCard3 cardShape">
          <div className="infoCardImg">
          <img src={pilarSocial} alt="Pilar Social" />

          </div>
          <p className="primaryText">Social</p>
          <p className="secondaryText">Construa uma cidade menos congestionada e mais limpa através do compartilhamento</p>
          </div>
        </div>
      </div>
      <div>image</div>
    </section>
  );
};
export default OurPillars;
