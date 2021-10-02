import React from 'react'

const ContactUsForm = () => {
  return (
    <section className="">
      <div className="">
        <p className="db tc">Dúvidas ou consultas?</p>
        <h3 className="text-color-primary f3 tc">Escreva para nós e responderemos o mais rápido possivel</h3>
        <form>
          <div className="w-100 w-40-l center">
            <input className="formControl center db w-100 w-70-m" type="text" placeholder="Nome" />
            <input className="formControl center db w-100 w-70-m" type="email" placeholder="Seu e-mail" />
            <textarea className="formControl center db w-100 w-70-m" cols="30" rows="10" placeholder="Mensagem"></textarea>
            <div>
              <input className="btn bg-primary w-70-m w-30-l w-100 ma4 center db" type="submit" />
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
export default ContactUsForm
