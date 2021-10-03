import React from 'react'

const Footer = () => {
  return (
    <footer className="footerbg pv6 pv7-l">
      <div>
        <p className="tc">
          Awto &copy; Copyright 2021. todos os dereitos reservados
        </p>
      </div>
      <div className="flex justify-center w-100">
        <a className="text-color-primary mh1" href="/#">
          Nossos Pilares
        </a>
        <a className="text-color-secondary mh1">·</a>
        <a className="text-color-primary mh1" href="/#">
          Contato
        </a>
      </div>
    </footer>
  )
}
export default Footer
