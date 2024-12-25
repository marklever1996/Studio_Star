import React from 'react';
import { motion } from 'framer-motion';
import './ContactForm.css';

const ContactForm = () => {
    return (
        <motion.form 
            className="contact-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
        >
            <h2>Send a Message</h2>
            <div className="form-group">
                <input type="text" id="name" required />
                <label htmlFor="name">Name</label>
            </div>
            <div className="form-group">
                <input type="email" id="email" required />
                <label htmlFor="email">Email</label>
            </div>
            <div className="form-group">
                <input type="tel" id="phone" required />
                <label htmlFor="phone">Phone</label>
            </div>
            <div className="form-group">
                <textarea id="message" required></textarea>
                <label htmlFor="message">Your Message...</label>
            </div>
            <motion.button 
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Send Message
            </motion.button>
        </motion.form>
    );
};

export default ContactForm; 