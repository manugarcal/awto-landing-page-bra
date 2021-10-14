import React from 'react'
import awtoLogo from '../assets/awto-header.svg'

const Navbar = () => {
  return (
    <div className="flex justify-between flex-wrap mb5-l">
      <div className="w-100 w-20-l mt5">
        <img src={awtoLogo} alt="Awto Logo" />
      </div>
      <div className="buttonsContainer  justify-end mt5 w-100 w-80-l">
        <a href="#ourPillars" className="headerBtn white">
          Nossos Pilares
        </a>
        <a href="#contato" className="headerBtn white">
          Contato
        </a>
        <a href="#suggestPoint" className="headerBtn fw7 br-pill pv3 ph4 bg-white text-color-primary">
          Sugere Pontos Awto
        </a>
      </div>
    </div>
  )
}
export default Navbar
