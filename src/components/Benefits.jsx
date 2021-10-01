import React from "react";
import Onboard1 from "../assets/onboard-1.svg";
import Onboard2 from "../assets/onboard-2.svg";
import Onboard3 from "../assets/onboard-3.svg";


const Benefits = () => {
  return (
    <section>
      <div className="benefitsTitle">
        <p>Esqueça benzina, seguro e burocracias</p>
        <h3 className="primaryTitle text-color-blue">
          Com awto você tem todos os benefícios de um carro, sem os coustos de
          tê-lo
        </h3>
      </div>
      <div className="benefitsCards">
        <div >
          <div className="cardImageContainer">
            <img src={Onboard1} alt="onboard 1" />
          </div>
          <div className="cardTextContainer">
            <p className="primaryText cardTitle">Abrir as portas com seu telefone</p>
            <p className="secondaryText cardText">Reserve o veículo mais próximo de você. Pegue e abra as portas com seu telefone</p>
          </div>
        </div>
        <div >
          <div className="cardImageContainer">
            <img src={Onboard2} alt="onboard 1" />
          </div>
          <div className="cardTextContainer">
            <p className="primaryText cardTitle">Dirija o tempo que quiser</p>
            <p className="secondaryText cardText">Se você quiser fazer uma parada e permanecer com o veículo, basta fechá-lo com as chaves</p>
          </div>
        </div>
        <div >
          <div className="cardImageContainer">
            <img src={Onboard3} alt="onboard 1" />
          </div>
          <div className="cardTextContainer">
            <p className="primaryText cardTitle">Finalize em qualquer ponto Awto disponível</p>
            <p className="secondaryText cardText">Quando terminar sua viagem, retorne o veículo no Awto Point (pode ser previamente reservado) e finalize a viagem pelo seu telefone</p>
          </div>
        </div>


      </div>
    </section>
  );
};
export default Benefits;
