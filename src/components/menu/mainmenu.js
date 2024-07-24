import React from 'react'
import { Link } from 'gatsby';
import homelogo from '../../files/Logo.png';

const MainMenu = () => {

  return (
    <nav className='navbar navbar-expand-lg'>
        <Link to='/' className='navbar-brand'>
          <img className='home-logo' src={homelogo} alt='logo'/>
        </Link>
        
        
        <div className="collapse navbar-collapse nav-menu">
            <ul className='navbar-nav'>
            
                <li className='nav-item'><Link className='nav-link' to='/about'>About</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/adoptions'>Adoptions</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/fosters'>Fosters</Link></li>
                <li className='nav-item'><Link className='nav-link' to='/contact'>Contact Us</Link></li>
                
            </ul>
            <a href='/donate' className='btn btn-primary btn-header'>Donate</a>
        </div>
     
    </nav>
  )
}

export default MainMenu;