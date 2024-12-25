import React, { useEffect } from 'react';
import './LandingPage.css';
import logo from '../assets/images/logo.png';
import image1 from '../assets/images/image00001.jpeg';
import image2 from '../assets/images/image00002.jpeg';
import image3 from '../assets/images/image00020.jpeg';
import image4 from '../assets/images/image00004.jpeg';
import image5 from '../assets/images/image00005.jpeg';
import image6 from '../assets/images/image00006.jpeg';
import image7 from '../assets/images/image00007.jpeg';
import image8 from '../assets/images/image00008.jpeg';
import image9 from '../assets/images/image00009.jpeg';
import image11 from '../assets/images/image00011.jpeg';
import image12 from '../assets/images/image00012.jpeg';
import image13 from '../assets/images/image00013.jpeg';
import image14 from '../assets/images/image00014.jpeg';
import image15 from '../assets/images/image00015.jpeg';
import image16 from '../assets/images/image00016.jpeg';
import image17 from '../assets/images/image00017.jpeg';

const LandingPage = () => {
    useEffect(() => {
        const collages = document.querySelectorAll('.collage');
        const photoRows = document.querySelectorAll('.photo-row');
        
        // Dupliceer foto rijen voor oneindig loop effect
        collages.forEach(collage => {
            photoRows.forEach(row => {
                const clone = row.cloneNode(true);
                collage.appendChild(clone);
            });
        });
    }, []);

    return (
        <main>
            <div className="collage-container">
                <div className="collage" id="collage1">
                    <div className="photo-row">
                        <div className="photo">
                            <img src={image1} alt="Photo 1" />
                        </div>
                        <div className="photo">
                            <img src={image2} alt="Photo 2" />
                        </div>
                        <div className="photo">
                            <img src={image3} alt="Photo 3" />
                        </div>
                    </div>
                    <div className="photo-row">
                        <div className="photo">
                            <img src={image1} alt="Photo 4" />
                        </div>
                        <div className="photo">
                            <img src={image4} alt="Photo 6" />
                        </div>
                    </div>
                    <div className="photo-row">
                        <div className="photo">
                            <img src={image5} alt="Photo 7" />
                        </div>
                        <div className="photo">
                            <img src={image6} alt="Photo 8" />
                        </div>
                        <div className="photo">
                            <img src={image7} alt="Photo 9" />
                        </div>
                    </div>
                    <div className="photo-row">
                        <div className="photo">
                            <img src={image8} alt="Photo 10" />
                        </div>
                        <div className="photo">
                            <img src={image9} alt="Photo 11" />
                        </div>
                        <div className="photo">
                            <img src={image11} alt="Photo 12" />
                        </div>
                    </div>
                    <div className="photo-row">
                        <div className="photo">
                            <img src={image12} alt="Photo 13" />
                        </div>
                        <div className="photo">
                            <img src={image13} alt="Photo 14" />
                        </div>
                        <div className="photo">
                            <img src={image15} alt="Photo 15" />
                        </div>
                    </div>
                    <div className="photo-row">
                        <div className="photo">
                            <img src={image14} alt="Photo 16" />
                        </div>
                        <div className="photo">
                            <img src={image16} alt="Photo 17" />
                        </div>
                        <div className="photo">
                            <img src={image17} alt="Photo 18" />
                        </div>
                    </div>
                </div>

                <div className="collage" id="collage2">
                    <div className="photo-row">
                        <div className="photo">
                            <img src={image14} alt="Photo 16" />
                        </div>
                        <div className="photo">
                            <img src={image16} alt="Photo 17" />
                        </div>
                        <div className="photo">
                            <img src={image17} alt="Photo 18" />
                        </div>
                    </div>
                    <div className="photo-row">
                        <div className="photo">
                            <img src={image12} alt="Photo 13" />
                        </div>
                        <div className="photo">
                            <img src={image13} alt="Photo 14" />
                        </div>
                        <div className="photo">
                            <img src={image15} alt="Photo 15" />
                        </div>
                    </div>
                    <div className="photo-row">
                        <div className="photo">
                            <img src={image8} alt="Photo 10" />
                        </div>
                        <div className="photo">
                            <img src={image9} alt="Photo 11" />
                        </div>
                        <div className="photo">
                            <img src={image11} alt="Photo 12" />
                        </div>
                    </div>
                    <div className="photo-row">
                        <div className="photo">
                            <img src={image1} alt="Photo 4" />
                        </div>
                        <div className="photo">
                            <img src={image4} alt="Photo 6" />
                        </div>
                    </div>
                    <div className="photo-row">
                        <div className="photo">
                            <img src={image5} alt="Photo 7" />
                        </div>
                        <div className="photo">
                            <img src={image6} alt="Photo 8" />
                        </div>
                        <div className="photo">
                            <img src={image7} alt="Photo 9" />
                        </div>
                    </div>
                </div>

                <div className="collage" id="collage3">
                    <div className="photo-row">
                        <div className="photo">
                            <img src={image1} alt="Photo 4" />
                        </div>
                        <div className="photo">
                            <img src={image4} alt="Photo 6" />
                        </div>
                    </div>
                    <div className="photo-row">
                        <div className="photo">
                            <img src={image5} alt="Photo 7" />
                        </div>
                        <div className="photo">
                            <img src={image6} alt="Photo 8" />
                        </div>
                        <div className="photo">
                            <img src={image7} alt="Photo 9" />
                        </div>
                    </div>
                    <div className="photo-row">
                        <div className="photo">
                            <img src={image8} alt="Photo 10" />
                        </div>
                        <div className="photo">
                            <img src={image9} alt="Photo 11" />
                        </div>
                        <div className="photo">
                            <img src={image11} alt="Photo 12" />
                        </div>
                    </div>
                    <div className="photo-row">
                        <div className="photo">
                            <img src={image12} alt="Photo 13" />
                        </div>
                        <div className="photo">
                            <img src={image13} alt="Photo 14" />
                        </div>
                        <div className="photo">
                            <img src={image15} alt="Photo 15" />
                        </div>
                    </div>
                    <div className="photo-row">
                        <div className="photo">
                            <img src={image14} alt="Photo 16" />
                        </div>
                        <div className="photo">
                            <img src={image16} alt="Photo 17" />
                        </div>
                        <div className="photo">
                            <img src={image17} alt="Photo 18" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default LandingPage;

