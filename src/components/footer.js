import React from "react";
import logo from '../files/Logo.png';

const Footer = () => {

    return (

        <footer>
            <div className="container">
                <div className="row">
                    <img className='footer-logo' src={logo} alt='logo' />
                    
                    <ul className="footer-menu">
                        <li><a href='/about'>About</a>
                            <ul>
                                <li><a href='/volunteer'>Volunteer</a></li>
                                <li><a href='/board-members'>Board Members</a></li>
                                <li><a href='/spay-neuter'>Low Cost Spay/Neuter</a></li>
                            </ul>
                        </li>
                        <li><a href='/adoptions'>Adoption</a>
                            <ul>
                                <li><a href='/adoption-application'>Application</a></li>
                            </ul>
                        </li>
                        <li><a href='/fosters'>Fosters</a>
                            <ul>
                                <li><a href='/become-a-foster'>How to foster</a></li>
                                <li><a href='/foster-application'>Application</a></li>
                            </ul>
                        </li>
                        <li><a href='/contact'>Contact Us</a></li>

                    </ul>
                </div>
                <div className="row info-row">
                    <div className="address">
                        <p>160 Chemin de Harrington</p>
                        <p>Harrington, QC</p>
                        <p>J8G 2S8</p>
                    </div>
                    <div className="contact"><div>
                        <p><a href="mailto:benniesrescue@gmail.com">benniesrescue@gmail.com</a></p>
                        <p><a href="tel:613-306-2134">613-306-2134</a></p></div>
                    </div>
                    
                   
                </div>
                <div className="footer-bottom">
                        <div className="copyright">
                            <p>© All Rights Reserved</p>
                        </div>
                        <div className="footer-donate-btn">
                        <p><a href='/donate' className='btn btn-primary btn-header'>Donate</a></p>
                        </div>
                    </div>
            </div>
        </footer>
    );
};

export default Footer;

