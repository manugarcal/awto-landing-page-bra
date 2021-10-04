import { React, useContext } from 'react'
import { Context } from '../store/appContext'

const SuggestPoints = () => {
  const { actions } = useContext(Context)
  return (
    <section className="mv5">
      <div className="tc">
        <p>Sugira pontos Awto</p>
        <h3 className="text-color-primary f3 tc">
          Ajude-nos a decidir a localização de nossos novos Pontos Awto
        </h3>
        <a href="" className="text-color-primary" onClick={actions.openModal()} data-modal="modal-one">instruções</a>
      </div>
      <div className="flex flex-wrap w-100 mv5">
        <div className="w-100 w-50-l">map</div>
        <div className="w-100 w-50-l">
          <form>
            <div className="w-100 w-80-l flex justify-center flex-column">
              <label className="center text-color-primary fw7 mv2 w-100 w-70-m db">Ponto Awto 1</label>
              <input
                className="formControl center db w-100 w-70-m"
                type="text"
                placeholder="Encontrar-me na barra de endereço"
              />
              <label className="center text-color-primary fw7 mv2 w-100 w-70-m db">Ponto Awto 2</label>
              <input
                className="formControl center db w-100 w-70-m"
                type="text"
                placeholder="Encontrar-me na barra de endereço"
              />
              <label className="center text-color-primary fw7 mv2 w-100 w-70-m db">Ponto Awto 3</label>
              <input
                className="formControl center db w-100 w-70-m"
                type="text"
                placeholder="Encontrar-me na barra de endereço"
              />
              <label className="center  text-color-secondaryfw7 mv2 w-100 w-70-m db">
                Qual é o seu nome?
              </label>
              <input
                className="formControl center db w-100 w-70-m"
                type="text"
                placeholder="Digite seu primeiro e sobrenome"
              />
              <label className="center text-color-secondaryfw7 mv2 w-100 w-70-m db">
                Qual é o seu e-mail?
              </label>
              <input className="formControl center db w-100 w-70-m" type="text" placeholder="Digite seu e-mail"
              />
              <div className="center db w-100 w-70-m">
                <input className="btn bg-secondary w-100 w-40-l" type="submit" />
              </div>
            </div>
          </form>
        </div>
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
