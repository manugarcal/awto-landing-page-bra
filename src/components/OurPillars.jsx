import React from 'react'
import pilarEconomico from '../assets/pilar-economico.svg'
import pilarPratico from '../assets/pilar-pratico.svg'
import pilarSocial from '../assets/pilar-social.svg'
import pilarApp from '../assets/img-pilares.png'

const OurPillars = () => {
  return (
    <section className="flex flex-wrap">
      <div className="w-100 w-50-l">
        <p className="tc tl-l">Nossos pilares</p>
        <h3 className="text-color-primary text-color-primary f3 tc tl-l">
          Economia, praticidade e responsabilidade com uma nova maneira de se
          locomover
        </h3>
        <div className="flex flex-wrap w-100">
          <div className="flex flex-wrap w-100 justify-between">
            <div className="w-100 w-50-l pa2">
              <div className='cardShape h-100 pa4'>
                <div className="">
                  <img src={pilarEconomico} alt="Pilar Economico" />
                </div>
                <p className="text-color-primary f5 fw7">Economico</p>
                <p className="">Com Awto você tem todos os benefícios de um carro, sem os custos de tê-lo</p>
              </div>
            </div>
            <div className="w-100 w-50-l pa2">
              <div className='cardShape h-100 pa4'>
                <div className="">
                  <img src={pilarPratico} alt="Pilar Pratico" />
                </div>
                <p className="text-color-primary f5 fw7">Prático</p>
                <p className="">Gerencie seu tempo e desfrute da liberdade de não depender de outra pessoa</p>
              </div>
            </div>
          </div>
          <div className="w-100 pa2">
            <div className="cardShape w-100 pa4">
              <div className="">
                <img src={pilarSocial} alt="Pilar Social" />
              </div>
              <p className="text-color-primary f5 fw7">Social</p>
              <p className="">Construa uma cidade menos congestionada e mais limpa através do compartilhamento</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 w-50-l">
        <img className="w-60 center db" src={pilarApp} alt="pilares app" />
      </div>
    </section>
  )
}
export default OurPillars
