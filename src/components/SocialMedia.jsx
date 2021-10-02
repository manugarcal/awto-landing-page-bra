import React from 'react'
import iconFb from '../assets/rrss-facebook.svg'
import iconTt from '../assets/rrss-twitter.svg'
import iconIg from '../assets/rrss-instagram.svg'

const SocialMedia = () => {
  return (
    <section className="w-90 w-50-l db center ma5">
      <div className="socialMediaWrapper flex justify-center flex-wrap pa4">
        <h3 className="text-color-primary f3 db w-100 w-60-l center tc tl-l">Siga-nos em nossas redes sociais</h3>
        <div className="flex justify-center w-100 w-40-l">
          <div className="socialMediaIcon">
            <img src={iconFb} alt="FaceBook" />
          </div>
          <div className="socialMediaIcon">
            <img src={iconTt} alt="Twitter" />
          </div>
          <div className="socialMediaIcon">
            <img src={iconIg} alt="Instagram" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default SocialMedia
