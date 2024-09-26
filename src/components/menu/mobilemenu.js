import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from 'gatsby';
import homelogo from '../../files/Logo.png';

const MobileMenu = (props) => {

  return (
    <Menu {...props}>
      <Link to='/' className='navbar-brand'>
          <img className='home-logo' src={homelogo} alt='logo'/>
        </Link>
      <ul className="mmenu--list">
      
        <li className='mmenu--list__item'>
          <Link to='/en/about'>About</Link>
        </li>
        
        <li className='mmenu--list__item'>
          <Link to='/en/adoptions'>Adoptions</Link>
        </li>

        <li className='mmenu--list__item'>
          <Link to="/en/fosters/">Fosters</Link>
        </li>

        <li className='mmenu--list__item'>
          <Link to="/en/contact/">Contact Us</Link>
        </li>

      </ul>
      <a href='/en/donate' className='btn btn-primary btn-header'>Donate</a>
      <Link className='language-switcher' to='/fr/'>Français</Link>
    </Menu>
  );
};

export default MobileMenu;