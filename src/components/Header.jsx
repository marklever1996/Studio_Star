import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMenuOpen]);

    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="StudioStarr" />
                </Link>
            </div>

            <nav className="desktop-nav">
                <ul>
                    <li><Link to="/">Portfolio</Link></li>
                    <li><Link to="/">About Me</Link></li>
                    <li><Link to="/">Contact</Link></li>
                </ul>
            </nav>

            <div className="social-media">
                <a 
                    href="https://www.instagram.com/miss_kekeli/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-instagram"></i>
                </a>
            </div>

            <button 
                className="hamburger"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
            >
                <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>

            <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                <ul>
                    <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Portfolio</Link></li>
                    <li><Link to="/" onClick={() => setIsMenuOpen(false)}>About Me</Link></li>
                    <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                    <li>
                        <a 
                            href="https://www.instagram.com/miss_kekeli/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <i className="fa-brands fa-instagram"></i>
                            <span>Instagram</span>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;