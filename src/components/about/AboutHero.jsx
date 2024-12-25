import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../../assets/images/image00003.jpeg';
import logo from '../../assets/images/logo.png';
import './AboutHero.css';

const AboutHero = () => {
    return (
        <motion.section 
            className="about-hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container">
                <div className="about-content">
                    <motion.div 
                        className="about-title"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <h1>About</h1>
                        <h2 className="gradient-text">Kekeli Dodzi</h2>
                    </motion.div>

                    <div className="about-grid">
                        <motion.div 
                            className="image-container"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <div className="image-backdrop"></div>
                            <img src={profileImage} alt="Kekeli Dodzi" className="profile-image" />
                        </motion.div>

                        <motion.div 
                            className="about-text"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            <img src={logo} alt="Studio Star" className="about-logo" />
                            <p>
                                I am an ambitious photographer who takes great pride in the presentation 
                                and quality of my work.
                            </p>
                            <p>
                                Born in Ghana and living the Netherlands for the past 6 years, 
                                I am a passionate photographer who strives for perfection in every shot. 
                                I combine my artistic vision with technical expertise to create beautiful 
                                and unforgettable images.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default AboutHero; 