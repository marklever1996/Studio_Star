import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';
import ContactForm from './ContactForm';
import ContactCard from './ContactCard';
import './ContactSection.css';

const ContactSection = () => {
    const contactInfo = [
        {
            icon: <FaPhone />,
            title: "Phone",
            content: "+316 10095028"
        },
        {
            icon: <FaEnvelope />,
            title: "Email",
            content: "studiostar.photog@gmail.com"
        },
        {
            icon: <FaInstagram />,
            title: "Instagram",
            content: "@studio_s.t.a.r",
            link: "https://www.instagram.com/studio_s.t.a.r/"
        }
    ];

    return (
        <motion.section 
            className="contact-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-info">
                        {contactInfo.map((info, index) => (
                            <ContactCard key={index} {...info} />
                        ))}
                    </div>
                    <ContactForm />
                </div>
            </div>
        </motion.section>
    );
};

export default ContactSection; 