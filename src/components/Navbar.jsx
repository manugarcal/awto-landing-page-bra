import React from 'react'
import awtoLogo from '../assets/awto-header.svg'

const Navbar = () => {
  return (
    <div className="flex justify-between flex-wrap mt5 mb5-l">
      <div className="w-100 w-50-l">
        <img src={awtoLogo} alt="Awto Logo" />
      </div>
      <div className="butonsContainer w-100 w-50-l">
        <a href="#ourPillars" className="headerBtn">
          Nossos Pilares
        </a>
        <a href="#contato" className="headerBtn">
          Contato
        </a>
        <a href="#suggestPoint" className="headerBtn">
          Sugere Pontos Awto
        </a>
      </div>
    </div>
  )
}
export default Navbar
