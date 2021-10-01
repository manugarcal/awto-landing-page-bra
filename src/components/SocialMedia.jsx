import React from 'react'
import iconFb from '../assets/rrss-facebook.svg'
import iconTt from '../assets/rrss-twitter.svg'
import iconIg from '../assets/rrss-instagram.svg'

const SocialMedia = () => {
  return (
    <section className="socialMediaContainer">
      <div className="socialMediaWrapper">
        <h3 className="text-color-blue">Siga-nos em nossas redes sociais</h3>
        <div className="socialMediaIconsContainer">
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
