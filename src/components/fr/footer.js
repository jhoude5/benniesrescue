import React from "react";
import logo from '../../files/Logo.png';

const Footer = () => {

    return (

        <footer>
            <div className="container">
                <div className="row">
                    <img className='footer-logo' src={logo} alt='logo' />
                    
                    <ul className="footer-menu">
                        <li><a href='/fr/about'>À propos</a>
                            <ul>
                                <li><a href='/fr/about/volunteer'>Volunteer</a></li>
                                <li><a href='/fr/about/board-members'>Membres du conseil d'administration</a></li>
                                <li><a href='/fr/about/spay-neuter'>Stérilisation à faible coût</a></li>
                            </ul>
                        </li>
                        <li><a href='/fr/adoptions'>Adoption</a>
                            <ul>
                                <li><a href='/fr/adoption/adoption-application'>Application</a></li>
                            </ul>
                        </li>
                        <li><a href='/fr/fosters'>Famille D’accueil</a>
                            <ul>
                                <li><a href='/fr/fosters/become-a-foster'>Comment famille d'accueil</a></li>
                                <li><a href='/fr/fosters/foster-application'>Application</a></li>
                            </ul>
                        </li>
                        <li><a href='/fr/contact'>Contactez-nous</a></li>

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
                            <p>© Tous droits réservés</p>
                        </div>
                        <div className="footer-donate-btn">
                        <p><a href='/fr/donate' className='btn btn-primary btn-header'>Faire un don</a></p>
                        </div>
                    </div>
            </div>
        </footer>
    );
};

export default Footer;

