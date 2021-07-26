import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollPosition } from '../js/useScrollPosition';
import useResizeObserver from '../js/useResizeObserver';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
  mainBody,
  repos,
  about,
  skills,
  blog,
  onlineWritings
} from '../config.js';

const Navigation = React.forwardRef((props, ref) => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [active, setActive] = useState('home');
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= 0 ? setIsTop(false) : setIsTop(true);

    const sections = document.querySelectorAll('.target-section');
    sections.forEach(function(current) {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute('id');
      const pos = navBottom - scrollPosition;
      /* If our current scroll position enters the space where current section
       * on screen is, set active section
       */
      if (pos > sectionTop && pos <= sectionTop + sectionHeight) {
        setActive(sectionId);
      }
    });
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={` fixed-top  ${
        !isTop ? 'navbar-dark bg-dark' : 'navbar-transparent'
      }`}
      expand="lg"
    >
      <Navbar.Brand className="brand" href={process.env.PUBLIC_URL + '/#home'}>
        {``}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {
            <Nav.Link className="nav-link lead">
              <Link to={process.env.PUBLIC_URL + '/blog'}>Blog</Link>
            </Nav.Link>
          }

          {repos.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + '/#projects'}
            >
              Projects
            </Nav.Link>
          )}
          {onlineWritings.show && (
            <NavLink title="Writings" active={active} anchor="publication" />
          )}
          <Nav.Link
            className="nav-link lead"
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </Nav.Link>
          {about.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + '/#aboutme'}
            >
              About
            </Nav.Link>
          )}
          {skills.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + '/#skills'}
            >
              Skills
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

const NavLink = ({ active, title, anchor }) => (
  <Nav.Link
    className={`nav-link lead ${active === anchor ? 'active' : ''}`}
    href={`${process.env.PUBLIC_URL}/#${anchor}`}
  >
    {title}
  </Nav.Link>
);

export default Navigation;
