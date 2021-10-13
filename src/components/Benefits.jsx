import React from 'react'
import Onboard1 from '../assets/onboard-1.svg'
import Onboard2 from '../assets/onboard-2.svg'
import Onboard3 from '../assets/onboard-3.svg'

const Benefits = () => {
  return (
    <section>
      <div className="center w-100 tc">
        <p className="">Esqueça combustível, seguro e burocracias</p>
        <h3 className="text-color-primary f4 w-50-l center w-100">
          A awto você tem todos os benefícios de um carro, sem os custos de
          tê-lo
        </h3>
      </div>
      <div className="flex flex-wrap">
        <div className="w-100 w-33-l ph2 mv3">
          <div className="flex justify-center">
            <img src={Onboard1} alt="onboard 1" />
          </div>
          <div>
            <p className="text-color-primary tc f5 fw7">Abrir as portas com seu telefone</p>
            <p className="tc">Reserve o veículo mais próximo de você. Pegue e abra as portas com seu telefone</p>
          </div>
        </div>
        <div className="w-100 w-33-l ph2 mv3">
          <div className="flex justify-center">
            <img src={Onboard2} alt="onboard 1" />
          </div>
          <div>
            <p className="text-color-primary tc f5 fw7">Dirija o tempo que quiser</p>
            <p className="tc">Se você quiser fazer uma parada e permanecer com o veículo, basta fechá-lo com as chaves</p>
          </div>
        </div>
        <div className="w-100 w-33-l ph2 mv3">
          <div className="flex justify-center">
            <img src={Onboard3} alt="onboard 1" />
          </div>
          <div>
            <p className="text-color-primary tc f5 fw7">Finalize em qualquer ponto Awto disponível</p>
            <p className="tc">Quando terminar sua viagem, retorne o veículo no Awto Point (pode ser previamente reservado) e finalize a viagem pelo seu telefone</p>
          </div>
        </div>

      </div>
    </section>
  )
}
export default Benefits
