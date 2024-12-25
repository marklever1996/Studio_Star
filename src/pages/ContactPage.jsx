import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa';
import './ContactPage.css';

const ContactPage = () => {
    const [formStatus, setFormStatus] = useState({ type: '', message: '' });
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({ type: 'loading', message: 'Sending...' });

        try {
            // Email logic here
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate sending
            setFormStatus({ 
                type: 'success', 
                message: 'Thank you for your message! I will get back to you as soon as possible.' 
            });
            formRef.current.reset();
        } catch (error) {
            setFormStatus({ 
                type: 'error', 
                message: 'Something went wrong. Please try again later.' 
            });
        }
    };

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <motion.div 
            className="contact-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="contact-hero">
                <motion.h1 {...fadeIn}>
                    Let's Create Something Beautiful
                </motion.h1>
                <motion.p {...fadeIn} transition={{ delay: 0.2 }}>
                    Whether it's a photoshoot, collaboration, or inquiry - 
                    I'm here to help bring your vision to life
                </motion.p>
            </div>

            <div className="contact-content">
                <motion.div 
                    className="contact-info"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h2>Contact Information</h2>
                    <div className="info-items">
                        <a href="mailto:studiostar.photog@gmail.com" className="info-item">
                            <FaEnvelope />
                            <span>studiostar.photog@gmail.com</span>
                        </a>
                        <a href="tel:+31610095028" className="info-item">
                            <FaPhone />
                            <span>+31 6 10095028</span>
                        </a>
                        <a 
                            href="https://www.instagram.com/studio_s.t.a.r/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="info-item"
                        >
                            <FaInstagram />
                            <span>@studio_s.t.a.r</span>
                        </a>
                    </div>

                    <div className="availability">
                        <h3>Availability</h3>
                        <p>
                            I aim to respond to all messages within 24 hours.
                            For urgent matters, please reach out by phone.
                        </p>
                    </div>
                </motion.div>

                <motion.div 
                    className="contact-form"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="name" 
                                required 
                                placeholder="Name"
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="email" 
                                name="email" 
                                required 
                                placeholder="Email"
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="subject" 
                                required 
                                placeholder="Subject"
                            />
                        </div>
                        <div className="form-group">
                            <textarea 
                                name="message" 
                                required 
                                placeholder="Your message"
                                rows="6"
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className={`submit-button ${formStatus.type === 'loading' ? 'loading' : ''}`}
                            disabled={formStatus.type === 'loading'}
                        >
                            {formStatus.type === 'loading' ? (
                                ''
                            ) : (
                                <>
                                    Send Message <FaPaperPlane />
                                </>
                            )}
                        </button>
                        {formStatus.message && (
                            <div className={`form-status ${formStatus.type}`}>
                                {formStatus.message}
                            </div>
                        )}
                    </form>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ContactPage; 