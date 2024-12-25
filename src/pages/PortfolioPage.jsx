import React from 'react';
import { Link } from 'react-router-dom';
import './PortfolioPage.css';

// Importeer alle benodigde afbeeldingen
import beautyImage from '../assets/images/image00015.jpeg';
import portraitsImage from '../assets/images/image00026.jpeg';
import editorialImage from '../assets/images/image00016.jpeg';
import fineArtsImage from '../assets/images/image00011.jpeg';
import weddingImage from '../assets/images/image00008.jpeg';
import headshotsImage from '../assets/images/selfie2.jpg';
import printsImage from '../assets/images/image00041.jpeg';
import commercialImage from '../assets/images/image00045.jpeg';

const portfolioCategories = [
    {
        id: 'beauty',
        title: 'Beauty',
        image: beautyImage,
        gridClass: 'left-two-thirds'
    },
    {
        id: 'portraits',
        title: 'Portraits',
        image: portraitsImage,
        gridClass: 'right-one-third'
    },
    {
        id: 'editorial',
        title: 'Editorial & Fashion',
        image: editorialImage,
        gridClass: 'left-one-third'
    },
    {
        id: 'finearts',
        title: 'Fine Arts',
        image: fineArtsImage,
        gridClass: 'right-two-thirds'
    },
    {
        id: 'wedding',
        title: 'Wedding',
        image: weddingImage,
        gridClass: 'left-two-thirds'
    },
    {
        id: 'headshots',
        title: 'Professional Headshots',
        image: headshotsImage,
        gridClass: 'left-one-third'
    },
    {
        id: 'prints',
        title: 'Prints',
        image: printsImage,
        gridClass: 'left-one-third'
    },
    {
        id: 'commercial',
        title: 'Commercial',
        image: commercialImage,
        gridClass: 'left-two-thirds'
    }
];

const PortfolioPage = () => {
    return (
        <div className="portfolio-container">
            <div className="container">
                {/* Groepeer categorieën per twee voor de rijen */}
                {[0, 2, 4, 6].map((index) => (
                    <div className="row" key={index}>
                        {portfolioCategories.slice(index, index + 2).map((category) => (
                            <Link
                                key={category.id}
                                to={`/${category.id}`}
                                className={`column ${category.gridClass}`}
                                id="grayscale"
                            >
                                <img src={category.image} alt={category.title} />
                                <h2>{category.title}</h2>
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PortfolioPage;
