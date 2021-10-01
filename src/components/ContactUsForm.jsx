import React from 'react'

const ContactUsForm = () => {
  return (
    <section className="contactFormContainer">
      <div className="contactFormTitle">
        <p className="">Dúvidas ou consultas?</p>
        <h3 className="f3">Escreva para nós e responderemos o mais rápido possivel</h3>
        <form>
          <div className="contactForm">
            <input className="formControl" type="text" placeholder="Nome" />
            <input className="formControl" type="email" placeholder="Seu e-mail" />
            <textarea className="formControl" name="" id="" cols="30" rows="10" placeholder="Mensagem"></textarea>
            <div className="btnContainer">
              <input className="btn submitContactForm" type="submit" />
            </div>
          </div>
        </form>
      </div>

    </section>
  )
}
export default ContactUsForm
