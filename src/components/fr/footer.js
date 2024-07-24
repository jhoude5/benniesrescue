import React from "react";

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
                        <li>adoptions
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

