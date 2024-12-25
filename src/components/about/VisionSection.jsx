import React from 'react';
import { motion } from 'framer-motion';
import './VisionSection.css';

const VisionSection = () => {
    return (
        <motion.section 
            className="vision-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="container">
                <h2>Professional Photography</h2>
                <div className="vision-content">
                    <p>
                        From conceptualization to execution, I strive for perfection in every frame. 
                        Whether I'm documenting everyday life or special events, I aim to tell 
                        compelling stories through my photographs. Each click is a testament to my 
                        dedication to visual storytelling.
                    </p>
                    <p>
                        What sets me apart is my commitment to blending personal vision with 
                        professional expertise. I believe in immersing myself in the subject matter 
                        to truly understand its essence before even lifting my camera. This approach 
                        allows me to capture authentic moments that resonate with emotion and authenticity.
                    </p>
                </div>
            </div>
        </motion.section>
    );
};

export default VisionSection; 