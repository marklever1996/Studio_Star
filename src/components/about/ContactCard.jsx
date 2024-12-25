import React from 'react';
import { motion } from 'framer-motion';
import './ContactCard.css';

const ContactCard = ({ icon, title, content, link }) => {
    return (
        <motion.div 
            className="contact-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <span className="contact-icon">{icon}</span>
            <h3>{title}</h3>
            {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    {content}
                </a>
            ) : (
                <p>{content}</p>
            )}
        </motion.div>
    );
};

export default ContactCard; 