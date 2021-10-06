import React from 'react'
import { slide as Menu } from 'react-burger-menu'

const Burger = () => {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu right noOverlay>
        <a id="home" className="menu-item" href="#ourPillars">Nossos Pilares</a>
        <a id="about" className="menu-item" href="#contato">Contato</a>
        <a id="contact" className="menu-item" href="#suggestPoint">Sugere Pontos Awto</a>
      </Menu>
    )
}
export default Burger
