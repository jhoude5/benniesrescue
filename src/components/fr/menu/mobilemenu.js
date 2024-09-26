import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from 'gatsby';
import homelogo from '../../../files/Logo.png';

const MobileMenu = (props) => {

  return (
    <Menu {...props}>
      <Link to='/' className='navbar-brand'>
          <img className='home-logo' src={homelogo} alt='logo'/>
        </Link>
      <ul className="mmenu--list">
      
        <li className='mmenu--list__item'>
          <Link to='/fr/about'>À propos</Link>
        </li>
        
        <li className='mmenu--list__item'>
          <Link to='/fr/adoptions'>Adoptions</Link>
        </li>

        <li className='mmenu--list__item'>
          <Link to="/fr/fosters">Famille D’accueil</Link>
        </li>

        <li className='mmenu--list__item'>
          <Link to="/fr/contact">Contactez-nous</Link>
        </li>

      </ul>
      <a href='/fr/donate' className='btn btn-primary btn-header'>Faire un don</a>
      <Link className='language-switcher' to='/en'>English</Link>
    </Menu>
  );
};

export default MobileMenu;