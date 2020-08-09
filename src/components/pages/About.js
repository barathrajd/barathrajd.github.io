import React from 'react';

const About = () => {
  return (
    <div className='section-about'>
      <header>
        <h3 className='heading-primary'>About</h3>
      </header>
      <div className='content'>
        <div className='about-left'>
          <h3 className='heading-second'>Barathraj Devarajan</h3>
          <h6 className='about-content-u'>
            I am a Front End Developer. My goal is to become a Full-Stack Web
            Developer. I am self-motivated to adding new technologies to my
            stack every day. I am a final year student at Kumaraguru College of
            Technology. I am from Thalaivasl, Salem.
          </h6>

          <div className='about-content-d'>
            <h3>Contact</h3>
            <div className='socia'>
              <div className='social-icon'>
                <a href='https://github.com/barathrajd'>
                  <span className='flex-d'>
                    <i className='fab fa-github' />
                    <h4> Github</h4>
                  </span>
                </a>
              </div>
              <div className='social-icon'>
                <a href='https://linkedin.com/in/barathrajd'>
                  <span className='flex-d'>
                    <i className='fab fa-linkedin' />
                    <h4> LinkedIn</h4>
                  </span>
                </a>
              </div>
              <div className='social-icon'>
                <a href='https://facebook.com/barathrajd'>
                  <span className='flex-d'>
                    <i className='fab fa-facebook-square' />
                    <h4> Facebook</h4>
                  </span>
                </a>
              </div>
              <div className='social-icon'>
                <a href='https://twitter.com/barathrajd'>
                  <span className='flex-d'>
                    <i className='fab fa-twitter-square' />
                    <h4>Twitter</h4>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='about-right'>
          <h3 className='heading-second'>Tools and Languages:</h3>
          <div className='tools'>
            <ul className='inner-tech'>
              <li className='effects'>HTML5</li>
              <li className='effects'>CSS3 </li>
              <li className='effects'>SASS </li>
              <li className='effects'>JavaScript </li>
              <li className='effects'>ReactJS</li>
              <li className='effects'>Bootstrap</li>
              <li className='effects'>NodeJS</li>
              <li className='effects'>Mongo DB</li>
              <li className='effects'>Git</li>
              <li className='effects'>Adobe XD</li>
              <li className='effects'>Figma</li>
              <li className='effects'>UI/UX</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
