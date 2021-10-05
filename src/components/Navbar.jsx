import React from 'react'
import awtoLogo from '../assets/awto-header.svg'

const Navbar = () => {
  return (
    <div className="flex justify-between flex-wrap mt5 mb5-l">
      <div className="w-100 w-50-l">
        <img src={awtoLogo} alt="Awto Logo" />
      </div>
      <div className="butonsContainer dn db-l w-100 w-50-l">
        <a href="/home" className="headerBtn white">
          Nossos Pilares
        </a>
        <a href="/home" className="headerBtn white">
          Contato
        </a>
        <a href="/home" className="headerBtn fw7 br-pill pv3 ph4 bg-white text-color-primary">
          Sugere Pontos Awto
        </a>
      </div>
    </div>
  )
}
export default Navbar
