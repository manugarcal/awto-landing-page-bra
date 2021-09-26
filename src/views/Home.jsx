import React from 'react';
import Header from '../components/Header.jsx';
import Navbar from '../components/Navbar.jsx';
import Benefits from '../components/Benefits.jsx';
import OurPillars from '../components/OurPillars.jsx';
import SuggestPoints from '../components/SuggestPoints.jsx';
import SocialMedia from '../components/SocialMedia.jsx';
import ContactUsForm from '../components/ContactUsForm.jsx';
import Footer from '../components/Footer.jsx';

export const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Benefits />
            <OurPillars />
            <SuggestPoints />
            <SocialMedia />
            <ContactUsForm />
            <Footer />
        </div>
    )
}
export default Home;
