import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useScrollPosition } from '../js/useScrollPosition';
import useResizeObserver from '../js/useResizeObserver';
import {useLoadEvent} from '../js/useLoadEvent';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
  news,
  repos,
  about,
  skills,
  blog,
  onlineWritings,
  getInTouch
} from '../config.js';
import { useHistEvent } from '../js/useHistEvent';

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -60; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

const NavLinkTo = ({ active, title, anchor, onClick }) => (
  <Link className={`nav-link lead ${active} ms-2 ms-md-2`} onClick={onClick}
     to={`/${anchor}#`}>{title}</Link>
);

const NavLink = ({ active, title, anchor, onClick }) => (
  <Link className={`nav-link lead ${active} ms-2 ms-md-2`} onClick={onClick}
     to={`/#${anchor}`} scroll={el => scrollWithOffset(el)}>{title}</Link>

);



const Navigation = React.forwardRef((props, ref)  => {
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(false);
  const [is404, setIs404] = useState(true);
  const [active, setActive] = useState('home');
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      if (prevPos.y === 0) {setIsTop(true); }
      else{
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);}
    },
    [navBottom]
  );
  
  useLoadEvent((is404) => {
    if (is404.is404) setIs404(true);
    else setIs404(false);
  });

  useHistEvent((is404) => {
    if (is404.is404) setIs404(true);
    else setIs404(false);
  });

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
      className={` fixed-top  ${is404 ? 'navbar-dark navbar-transparent' : 
        !isTop ? 'navbar-dark bg-dark' : 'navbar-transparent'
      }`}
      expand="lg"
    >
      <NavBar title="Home" active={isTop} />
      <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="basic-navbar-nav" className='me-3' />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ms-auto">
          {about.show && (
            <NavLink onClick={() => setExpanded(false)} title="About Me" active={active} anchor="aboutme" />
          )}

          <Nav.Link
            className="nav-link lead me ms-2 ms-md-2"
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => setExpanded(false)}
            active={false}
          >
            Resume
          </Nav.Link>
          
          {/* {news.show && (
            <NavLink onClick={() => setExpanded(false)} title="News" active={active} anchor="news-div" />
          )}        

          {blog.show && (
            <NavLink onClick={() => setExpanded(false)} title="Peeking in" active={active} anchor="blog-div" />
          )}

          {blog.show && (
            <NavLinkTo onClick={() => setExpanded(false)} title="My Blog" active={active} anchor="blog" />
          )}
          
          {onlineWritings.show && (
            <NavLink onClick={() => setExpanded(false)} title="Main Works" active={active} anchor="publication" />
          )}

          {repos.show && (
            <NavLink  className="ms-2 ms-md-2"  onClick={() => setExpanded(false)} title="Code updates" active={active} anchor="projects" />
          )}
          
          {getInTouch.show && (
            <NavLink  className="ms-2 ms-md-2"  onClick={() => setExpanded(false)} title="Get in Touch" active={active} anchor="getintouch" />
          )}

          {skills.show && (
            <Nav.Link
              onClick={() => setExpanded(false)}
              className="nav-link lead ms-2 ms-md-2"
              href={process.env.PUBLIC_URL + '/#skills'}
            >
              Skills
            </Nav.Link>
          )} */}

          {(
            <NavLinkTo onClick={() => setExpanded(false)} title="Try this 404" active={active} anchor="404" />
          )}
        </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
});

const NavBar = ({active, title, anchor}) => (
  <Link className={`${
    !active ? 'brand ms-3' : 'brand-black ms-3'
  }`} 
     to={`/#home`}>{}   
     <img
     src={process.env.PUBLIC_URL + '/favicon.ico'}
     alt="Home"
     width="45"
    />
</Link>
);

export default Navigation;
