import React from 'react';
import AboutHero from '../components/about/AboutHero';
import VisionSection from '../components/about/VisionSection';
import ContactSection from '../components/about/ContactSection';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="about-page">
            <AboutHero />
            <VisionSection />
            <ContactSection />
        </div>
    );
};

export default AboutMe;