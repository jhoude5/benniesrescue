import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from 'gatsby';

const MobileMenu = (props) => {

  return (
    <Menu {...props}>
      
      <ul className="mmenu--list">
      
        <li className='mmenu--list__item'>
          <Link to='/about'>About</Link>
        </li>
        
        <li className='mmenu--list__item'>
          <Link to='/adoptions'>Adoptions</Link>
        </li>

        <li className='mmenu--list__item'>
          <Link to="/fosters">Fosters</Link>
        </li>

        <li className='mmenu--list__item'>
          <Link to="/contact">Contact Us</Link>
        </li>

      </ul>
    </Menu>
  );
};

export default MobileMenu;