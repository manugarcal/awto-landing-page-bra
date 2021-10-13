import { React, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Context } from '../store/appContext'
import ScrollIcon from '../assets/ic-scroll.svg'
import imgAwtoMainHeader from '../assets/img-awto.webp'

const Header = () => {
   const { actions } = useContext(Context)
  const { register, handleSubmit } = useForm()
  const stringExplorarScroll = 'Explorar para mais informação'
  const onSubmit = data => actions.newsletterRequest(data)
  return (
    <section className="flex justify-between flex-wrap mv2 mt5-l">
      <div className="w-100 w-50-l">
        <h1 className="text-color-primary tc tl-l f2 f1-l mb5">Você quer fazer parte de uma tendência global?</h1>
        <p className="text-color-secondaryf6 fw5 tc tl-l mb5">
          O principal sistema de compartilhamento de carros da América Latina
          chegará em breve ao Brasil
        </p>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="headerInpurContainer w-100 w-80-l flex mv4">
              <input {...register('email')} className="headerInput w-70 w-80-l" type="email" />
              <input className="btnSubmit w-30 w-20-l" type="submit" />
            </div>
          </form>
          <div className="db-l dn">
            <div className="flex justify-center justify-start-l w-100 w-50-l mt4 mb5">
              <img src={ScrollIcon} alt="Scroll Icon" />
              <span className="text-color-primary mh3">{stringExplorarScroll}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 w-50-l">
        <picture>
          <source srcSet={imgAwtoMainHeader} type="image/webp" />
          <img className="w-80 db center" src={imgAwtoMainHeader} alt="Awto" />
        </picture>
      </div>
      <div className="dn-l db center">
        <div className="flex justify-center justify-start-l w-100 w-50-l mt4 mb5">
          <img src={ScrollIcon} alt="Scroll Icon" />
          <span className="text-color-primary mh3">{stringExplorarScroll}</span>
        </div>
      </div>
    </section>
  )
}
export default Header
