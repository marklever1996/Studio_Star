import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const PUBLIC_KEY = "M2c2z4liNUif_gAAl";

const ContactForm = () => {
    const form = useRef();
    const [status, setStatus] = useState({
        submitting: false,
        error: null,
        success: false
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ submitting: true, error: null, success: false });

        try {
            await emailjs.sendForm(
                'service_fd7h5h8',
                'template_kohf6co',
                form.current,
                PUBLIC_KEY
            );

            setStatus({
                submitting: false,
                error: null,
                success: true
            });

            // Reset form
            form.current.reset();

            // Reset success message after 5 seconds
            setTimeout(() => {
                setStatus(prev => ({ ...prev, success: false }));
            }, 5000);

        } catch (error) {
            setStatus({
                submitting: false,
                error: 'Er ging iets mis bij het versturen van je bericht.',
                success: false
            });
        }
    };

    return (
        <motion.form 
            ref={form}
            className="contact-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            onSubmit={handleSubmit}
        >
            <h2>Send a Message</h2>
            <div className="form-group">
                <input 
                    type="text" 
                    name="user_name" 
                    id="user_name" 
                    required 
                />
                <label htmlFor="user_name">Name</label>
            </div>
            <div className="form-group">
                <input 
                    type="email" 
                    name="user_email" 
                    id="user_email" 
                    required 
                />
                <label htmlFor="user_email">Email</label>
            </div>
            <div className="form-group">
                <input 
                    type="tel" 
                    name="phone" 
                    id="phone" 
                    required 
                />
                <label htmlFor="phone">Phone</label>
            </div>
            <div className="form-group">
                <textarea 
                    name="message" 
                    id="message" 
                    required
                ></textarea>
                <label htmlFor="message">Your Message...</label>
            </div>
            <motion.button 
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={status.submitting}
            >
                {status.submitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {status.error && (
                <div className="form-error">
                    {status.error}
                </div>
            )}

            {status.success && (
                <div className="form-success">
                    Bericht succesvol verzonden!
                </div>
            )}
        </motion.form>
    );
};

export default ContactForm; 