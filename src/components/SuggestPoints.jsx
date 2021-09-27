import React from "react";

const SuggestPoints = () => {
  const modals = document.querySelectorAll("[data-modal]");

  modals.forEach(function (trigger) {
    trigger.addEventListener("click", function (event) {
      event.preventDefault();
      const modal = document.getElementById(trigger.dataset.modal);
      modal.classList.add("open");
      const exits = modal.querySelectorAll(".modal-exit");
      exits.forEach(function (exit) {
        exit.addEventListener("click", function (event) {
          event.preventDefault();
          modal.classList.remove("open");
        });
      });
    });
  });

  return (
    <section className="suggestPointsWrapper">
      <div className="suggestPointsTitle">
        <p className="secondaryText">Sugira pontos Awto</p>
        <h3 className="primaryTitle">
          Ajude-nos a decidir a localização de nossos novos Pontos Awto
        </h3>
        <a href="/" data-modal="modal-one">instruções</a>
      </div>
      <div className="suggestPointsContainer">
        <div className="suggestPointsMapContainer">map</div>
        <div className="suggestPointsFormContainer">
          <form>
            <div className="formGroup">
              <label className="primaryText">Ponto Awto 1</label>
              <input
                className="formControl"
                type="text"
                placeHolder="Encontrar-me na barra de endereço"
              />
              <label className="primaryText">Ponto Awto 2</label>
              <input
                className="formControl"
                type="text"
                placeHolder="Encontrar-me na barra de endereço"
              />
              <label className="primaryText">Ponto Awto 3</label>
              <input
                className="formControl"
                type="text"
                placeHolder="Encontrar-me na barra de endereço"
              />
              <label className="primaryText customColor">
                Qual é o seu nome?
              </label>
              <input
                className="formControl"
                type="text"
                placeHolder="Digite seu primeiro e sobrenome"
              />
              <label className="primaryText customColor">
                Qual é o seu e-mail?
              </label>
              <input
                className="formControl"
                type="text"
                placeHolder="Digite seu e-mail"
              />
              <input className="btn submitBtnSuggestPoints" type="submit" />
            </div>
          </form>
        </div>
      </div>
      <div class="modal" id="modal-one">
        <div class="modal-bg modal-exit"></div>
        <div class="modal-container">
          <h3 className="primaryText">Instruções</h3>
          <ol>
            <li className="secondaryText">
              Digite o endereço do ponto que deseja sugerir dentro da caixa de
              pesquisa de endereços e clique no botao "adicionar".
            </li>
            <li className="secondaryText">
              Depois de sigerir tres pontos, preencha as informaçoes com seu
              nome e e-mail e acerte "enviar".
            </li>
          </ol>
          <button class="modal-close modal-exit">X</button>
        </div>
      </div>
    </section>
  );
};
export default SuggestPoints;
