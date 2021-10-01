import { React, useContext } from 'react'
import { Context } from '../store/appContext'

const SuggestPoints = () => {
  const { actions } = useContext(Context)
  return (
    <section className="suggestPointsWrapper">
      <div className="suggestPointsTitle">
        <p className="">Sugira pontos Awto</p>
        <h3 className="text-color-blue">
          Ajude-nos a decidir a localização de nossos novos Pontos Awto
        </h3>
        <a href="/" onClick={actions.openModal()} data-modal="modal-one">instruções</a>
      </div>
      <div className="suggestPointsContainer">
        <div className="suggestPointsMapContainer">map</div>
        <div className="suggestPointsFormContainer">
          <form>
            <div className="formGroup">
              <label className="">Ponto Awto 1</label>
              <input
                className="formControl"
                type="text"
                placeHolder="Encontrar-me na barra de endereço"
              />
              <label className="">Ponto Awto 2</label>
              <input
                className="formControl"
                type="text"
                placeHolder="Encontrar-me na barra de endereço"
              />
              <label className="">Ponto Awto 3</label>
              <input
                className="formControl"
                type="text"
                placeHolder="Encontrar-me na barra de endereço"
              />
              <label className=" customColor">
                Qual é o seu nome?
              </label>
              <input
                className="formControl"
                type="text"
                placeHolder="Digite seu primeiro e sobrenome"
              />
              <label className=" customColor">
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
      <div className="modal" id="modal-one">
        <div className="modal-bg modal-exit"></div>
        <div className="modal-container">
          <h3 className="">Instruções</h3>
          <ol>
            <li className="">
              Digite o endereço do ponto que deseja sugerir dentro da caixa de
              pesquisa de endereços e clique no botao "adicionar".
            </li>
            <li className="">
              Depois de sigerir tres pontos, preencha as informaçoes com seu
              nome e e-mail e acerte "enviar".
            </li>
          </ol>
          <button className="modal-close modal-exit">X</button>
        </div>
      </div>
    </section>
  )
}
export default SuggestPoints
