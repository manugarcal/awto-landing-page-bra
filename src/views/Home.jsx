import React from 'react'
import Header from '../components/Header.jsx'
import Navbar from '../components/Navbar.jsx'
import Benefits from '../components/Benefits.jsx'
import OurPillars from '../components/OurPillars.jsx'
import SuggestPoints from '../components/SuggestPoints.jsx'
import SocialMedia from '../components/SocialMedia.jsx'
import ContactUsForm from '../components/ContactUsForm.jsx'
import Footer from '../components/Footer.jsx'
import BurgerMenu from '../components/Menu'

export const Home = () => {
    return (
        <>
            <div className="w-80 center ph3 ph5-l">
                <BurgerMenu />
                <Navbar />
                <Header />
                <Benefits />
                <OurPillars />
                <SuggestPoints />
                <SocialMedia />
                <ContactUsForm />
            </div>
            <Footer />
        </>
    )
}
export default Home
