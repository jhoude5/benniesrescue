import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from 'gatsby';

const MobileMenu = (props) => {

  return (
    <Menu {...props}>
      
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
    </Menu>
  );
};

export default MobileMenu;