import React from "react";
import logo from '../files/Logo.png';

const Footer = () => {

    return (

        <footer>
            <div className="container">
                <div className="row">
                    <img src={logo} alt='logo' />
                    <ul>
                        <li>About
                            <ul>
                                <li>Volunteer</li>
                                <li>Board Members</li>
                            </ul>
                        </li>
                        <li>Adoptions
                            <ul>
                                <li>Application</li>
                            </ul>
                        </li>
                        <li>Fosters
                            <ul>
                                <li>How to foster</li>
                                <li>Application</li>
                            </ul>
                        </li>
                        <li>Contact Us</li>

                    </ul>
                    <div className="address">
                        <p>160 Chemin de Harrington</p>
                        <p>Harrington, QC</p>
                        <p>J8G 2S8</p>
                    </div>
                    <div className="contact">
                        <a href="mailto:benniesrescue@gmail.com">benniesrescue@gmail.com</a>
                        <a href="tel:613-306-2134">613-306-2134</a>
                    </div>
                    <div className="footer-bottom">
                        <div className="copyright">
                            <p>© All Rights Reserved</p>
                        </div>
                    </div>
                   
                </div>
            </div>
        </footer>
    );
};

export default Footer;

