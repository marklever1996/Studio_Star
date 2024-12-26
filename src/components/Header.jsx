import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaInstagram} from 'react-icons/fa';
import './Header.css';
import logo from '../assets/images/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
    const location = useLocation();

    const categories = [
        { id: 'beauty', title: 'Beauty' },
        { id: 'portraits', title: 'Portraits' },
        { id: 'editorial', title: 'Editorial & Fashion' },
        { id: 'finearts', title: 'Fine Arts' },
        { id: 'wedding', title: 'Wedding' },
        { id: 'professional', title: 'Professional' },
        { id: 'prints', title: 'Prints' },
        { id: 'commercial', title: 'Commercial' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (isMenuOpen) {
                setIsMenuOpen(false);
            }
            setIsDropdownOpen(false);
            setIsMobileDropdownOpen(false);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMenuOpen]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }

        return () => {
            document.body.classList.remove('menu-open');
        };
    }, [isMenuOpen]);

    const handleMobilePortfolioClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsMobileDropdownOpen(!isMobileDropdownOpen);
    };

    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="StudioStarr" />
                </Link>
            </div>

            <nav className="desktop-nav">
                <ul>
                    <li 
                        className="dropdown"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <Link 
                            to="/portfolio"
                            className={location.pathname === '/portfolio' ? 'active' : ''}
                        >
                            Portfolio
                        </Link>
                        {isDropdownOpen && (
                            <div className="dropdown-menu">
                                {categories.map(category => (
                                    <Link 
                                        key={category.id}
                                        to={`/${category.id}`}
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        {category.title}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </li>
                    <li>
                        <Link 
                            to="/about"
                            className={location.pathname === '/about' ? 'active' : ''}
                        >
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/contact"
                            className={location.pathname === '/contact' ? 'active' : ''}
                        >
                            Contact
                        </Link>
                    </li>
                    <li className="social-link">
                        <a 
                            href="https://www.instagram.com/miss_kekeli/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                    
                        </a>
                    </li>
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
                className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
            >
                <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>

            <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                <ul>
                    <li className="mobile-dropdown">
                        <a 
                            href="#"
                            onClick={handleMobilePortfolioClick}
                            className={location.pathname === '/portfolio' ? 'active' : ''}
                        >
                            Portfolio
                            <i className={`fa-solid fa-chevron-${isMobileDropdownOpen ? 'up' : 'down'}`}></i>
                        </a>
                        <ul className={`dropdown-menu ${isMobileDropdownOpen ? 'active' : ''}`}>
                            {categories.map(category => (
                                <li key={category.id}>
                                    <Link 
                                        to={`/${category.id}`}
                                        onClick={() => {
                                            setIsMenuOpen(false);
                                            setIsMobileDropdownOpen(false);
                                        }}
                                    >
                                        {category.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li>
                        <Link 
                            to="/about" 
                            onClick={() => setIsMenuOpen(false)}
                            className={location.pathname === '/about' ? 'active' : ''}
                        >
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/contact" 
                            onClick={() => setIsMenuOpen(false)}
                            className={location.pathname === '/contact' ? 'active' : ''}
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <a 
                            href="https://www.instagram.com/miss_kekeli/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;