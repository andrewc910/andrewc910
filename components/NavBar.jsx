import '../styles/navbar.scss';
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
  useEffect(() => {
    document.querySelector('.js-fullheight').style.height = `${window.innerHeight}px`;

    window.addEventListener('resize', () => {
      document.querySelector('.js-fullheight').style.height = `${window.innerHeight}px`;
    });
  });

  function handleClick() {
    document.querySelector('#sidebar').classList.toggle('active');
  }

  return (
    <nav id="sidebar" className="js-fullheight">
      <div className="custom-menu">
        <button type="button" id="sidebarCollapse" className="btn btn-primary" onClick={handleClick}>
          <FontAwesomeIcon icon={faBars} />
          <span className="sr-only">Toggle Menu</span>
        </button>
      </div>
      <div className="p-4 pt-5">
        <h1><a href="/" className="logo">Andrew</a></h1>
        <ul className="list-unstyled components mb-5">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>

      </div>
    </nav>
  );
}
