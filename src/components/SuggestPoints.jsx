import { React, useContext } from 'react'
import { Context } from '../store/appContext'

const SuggestPoints = () => {
  const { actions } = useContext(Context)
  return (
    <section id="suggestPoint" className="mv5">
      <div className="tc">
        <p>Sugira pontos Awto</p>
        <h3 className="text-color-primary f3 tc">
          Ajude-nos a decidir a localização de nossos novos Pontos Awto
        </h3>
        <a href="#" className="text-color-primary" onClick={actions.openModal()} data-modal="modal-one">instruções</a>
      </div>
      <div className="flex flex-wrap w-100 mv5">
        <iframe scrolling="no" className="iframe-map" src="https://www.awtosuite.pro/marketing/saopaulo" title="mapa">
        </iframe>
      </div>
      <div className="modal" id="modal-one">
        <div className="modal-bg modal-exit"></div>
        <div className="modal-container">
          <h3 className="text-color-primary f3">Instruções</h3>
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
          <button className="modal-close modal-exit">&#10006;</button>
        </div>
      </div>
    </section>
  )
}
export default SuggestPoints
