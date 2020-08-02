import React from 'react';
import img from '../../img/barathraj.jpg';

const Home = () => {
  return (
    <div className='section-home'>
      <div className='sec-left'>
        <div className='wel-text'>
          <header>
            <h3 className='heading-primary'>
              Hello{' '}
              <span role='img' aria-label='img'>
                👋
              </span>
            </h3>{' '}
            <h1>I am Barathraj Devarajan</h1>
            <h3>Front End Developer</h3>
          </header>
        </div>
        <br />
        <div className='contact'>
          <p>Contact</p>
          <div className='social'>
            <div className='social-icon'>
              <a href='https://github.com/barathrajd'>
                <i className='fab fa-github' />
              </a>
            </div>
            <div className='social-icon'>
              <a href='https://linkedin.com/in/barathrajd'>
                <i className='fab fa-linkedin' />
              </a>
            </div>
            <div className='social-icon'>
              <a href='https://facebook.com/barathrajd'>
                <i className='fab fa-facebook-square' />
              </a>
            </div>
            <div className='social-icon'>
              <a href='https://twitter.com/barathrajd'>
                <i className='fab fa-twitter-square' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='avatar'>
        <img src={img} alt='Barathraj' />
      </div>
    </div>
  );
};

export default Home;
