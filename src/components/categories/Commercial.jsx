import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../../styles/CategoryPage.css';

{/* <ul id="categories">
      <li>
          <div class="zoomIn">
              <img src="../StudioStarr/Images/image00045.jpeg" alt="Image 1"/>
          </div>
      </li>
      <li>
        <div class="zoomIn">
            <img src="../StudioStarr/Images/image00046.jpeg" alt="Image 1"/>
        </div>
    </li>

    <li>
        <div class="zoomIn">
            <img src="../StudioStarr/Images/image00030.jpeg" alt="Image 1"/>
        </div>
    </li>
</ul> */}

// Importeer de afbeeldingen
import image1 from '../../assets/images/image00045.jpeg';
import image2 from '../../assets/images/image00046.jpeg';
import image3 from '../../assets/images/image00030.jpeg';

const Commercial = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Array met alle afbeeldingen voor deze categorie
    const images = [
        image1,
        image2,
        image3,
    ];

    const openLightbox = (image, index) => {
        setSelectedImage(image);
        setCurrentIndex(index);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const navigateImage = (direction) => {
        let newIndex = currentIndex + direction;
        if (newIndex < 0) newIndex = images.length - 1;
        if (newIndex >= images.length) newIndex = 0;
        setCurrentIndex(newIndex);
        setSelectedImage(images[newIndex]);
    };

    return (
        <div className="category-container">
            <div className="category-title">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Commercial
                </motion.h1>
            </div>
            <div className="category-grid">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className="image-container"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        onClick={() => openLightbox(image, index)}
                    >
                        <img src={image} alt={`Commercial ${index + 1}`} />
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <button className="close-button" onClick={closeLightbox}>
                            <FaTimes />
                        </button>
                        <button 
                            className="nav-button prev-button" 
                            onClick={() => navigateImage(-1)}
                        >
                            <FaChevronLeft />
                        </button>
                        <img src={selectedImage} alt="Selected" />
                        <button 
                            className="nav-button next-button" 
                            onClick={() => navigateImage(1)}
                        >
                            <FaChevronRight />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Commercial; 