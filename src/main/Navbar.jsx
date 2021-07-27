import React, { useState } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
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
  const [scrollPosition, setScrollPosition] = useState(false);
  const [active, setActive] = useState('home');
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      if (prevPos.y == 0) {setIsTop(true); return;}
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );
  
  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop ? setIsTop(false) : setIsTop(true);

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

  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expanded={expanded} 
      ref={navbarMenuRef}
      className={` fixed-top  ${
        !isTop ? 'navbar-dark bg-dark' : 'navbar-transparent'
      }`}
      expand="lg"
    >
      <NavBar title="Home" active={isTop} anchor="blog" />
      <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {blog.show && (
            <NavLink onClick={() => setExpanded(false)} title="Blog" active={active} anchor="blog-div" />
          )}

          {repos.show && (
            <NavLink onClick={() => setExpanded(false)} title="Latest update" active={active} anchor="projects" />
          )}


          {onlineWritings.show && (
            <NavLink onClick={() => setExpanded(false)} title="Writings" active={active} anchor="publication" />
          )}

          <Nav.Link
            className="nav-link lead"
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => setExpanded(false)}
            active={false}
          >
            Resume
          </Nav.Link>

          {about.show && (
            <NavLink onClick={() => setExpanded(false)} title="About Me" active={active} anchor="aboutme" />
          )}


          {skills.show && (
            <Nav.Link
              onClick={() => setExpanded(false)}
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

const NavBar = ({active, title, anchor}) => (
  <Link className={`${
    !active ? 'brand' : 'brand-black'
  }`} 
     to={`/#home`}>{}   
     <img
     src={process.env.PUBLIC_URL + '/favicon.ico'}
     alt="Home"
     width="45"
    />
</Link>
);

const NavLink = ({ active, title, anchor, onClick }) => (
  <Link className={`nav-link lead ${active}`} onClick={onClick}
     to={`/#${anchor}`}>{title}</Link>

);

export default Navigation;
