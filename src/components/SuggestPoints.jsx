import React from "react";

const SuggestPoints = () => {
  return (
    <section className="suggestPointsWrapper">
      <div className="suggestPointsTitle">
        <p className="secondaryText">Sugira pontos Awto</p>
        <h3 className="primaryTitle">
          Ajude-nos a decidir a localização de nossos novos Pontos Awto
        </h3>
        <a href="/#">instruções</a>
      </div>
      <div className="suggestPointsContainer">
        <div className="suggestPointsMapContainer">map</div>
        <div className="suggestPointsFormContainer">
          <form>
            <div className="formGroup">
              <label className="primaryText">Ponto Awto 1</label>
              <input className="formControl" type="text" placeHolder="Encontrar-me na barra de endereço" />
              <label className="primaryText">Ponto Awto 2</label>
              <input className="formControl" type="text" placeHolder="Encontrar-me na barra de endereço" />
              <label className="primaryText">Ponto Awto 3</label>
              <input className="formControl" type="text" placeHolder="Encontrar-me na barra de endereço" />
              <label className="primaryText customColor">Qual é o seu nome?</label>
              <input className="formControl" type="text" placeHolder="Digite seu primeiro e sobrenome" />
              <label className="primaryText customColor">Qual é o seu e-mail?</label>
              <input className="formControl" type="text" placeHolder="Digite seu e-mail" />
              <input className="btn submitBtnSuggestPoints" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default SuggestPoints;
