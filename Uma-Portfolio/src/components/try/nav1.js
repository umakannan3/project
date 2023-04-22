import React, { useState } from 'react';
import './nav1.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBrain, faBriefcase, faCertificate, faContactBook, faHand, faHome, faProjectDiagram, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const Nav1 = () => {
  const [show, setShow] = useState(false);

  return (
    <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          {/* <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i> */}
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </div>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
          <div>
            <Link to='/' className='nav-logo'>
              {/* <i className={`fas fa-home-alt nav-logo-icon`}></i> */}
              <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
              <span className='nav-logo-name'>P.K.U</span>
            </Link>

            <div className='nav-list'>

              <Link to='/' className='nav-link'>
                {/* <i className={`fas fa-home-alt nav-logo-icon`}></i> */}
                <FontAwesomeIcon icon={faHand}></FontAwesomeIcon>
                <span className='nav-link-name'>Firstpage</span>
              </Link>
              <Link to='/first' className='nav-link'>
                {/* <i className='fas fa-tachometer-alt nav-link-icon'></i> */}
                <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                <span className='nav-link-name'>Home</span>
              </Link>
              <Link to='/about' className='nav-link'>
                {/* <i className='fas fa-hotel nav-link-icon'></i> */}
                <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon>
                <span className='nav-link-name'>About</span>
              </Link>
              <Link to='/skills' className='nav-link'>
                {/* <i className='fas fa-image nav-link-icon'></i> */}
                <FontAwesomeIcon icon={faBrain}></FontAwesomeIcon>
                <span className='nav-link-name'>Skills</span>
              </Link>
              <Link to='/certificate' className='nav-link'>
                {/* <i className='fas fa-dollar-sign nav-link-icon'></i> */}
                <FontAwesomeIcon icon={faCertificate}></FontAwesomeIcon>
                <span className='nav-link-name'>Certificate</span>
              </Link>
              <Link to='/projects' className='nav-link'>
                {/* <i className='fas fa-dollar-sign nav-link-icon'></i> */}
                <FontAwesomeIcon icon={faProjectDiagram}></FontAwesomeIcon>
                <span className='nav-link-name'>Projects</span>
              </Link>
              <Link to='/contact' className='nav-link'>
                {/* <i className='fas fa-dollar-sign nav-link-icon'></i> */}
                <FontAwesomeIcon icon={faContactBook}></FontAwesomeIcon>
                <span className='nav-link-name'>Contact</span>
              </Link>
            </div>
          </div>
        </nav>
      </aside>
    </main>
  );
};

export default Nav1;