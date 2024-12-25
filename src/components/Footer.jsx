import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <span className="copyright">© 2024 Studio Star</span>
                    <span className="separator">|</span>
                    <span className="kvk">KvK: 93867697</span>
                </div>
                <div className="footer-right">
                    <span className="credits">
                        Webdesign by{' '}
                        <a 
                            href="https://www.leverwebdesign.nl" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="credit-link"
                        >
                            LeverWebDesign
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
