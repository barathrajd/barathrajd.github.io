import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bgdark'>
        <Link className='navbar-brand' to='/'>
          Barathraj Devarajan
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='fas fa-bars'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                About
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
