import React from "react";
import Typist from "react-typist";
import { HashLink as Link } from 'react-router-hash-link';
import Container from "react-bootstrap/Container";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -40; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons, imgs}, ref) => {
    return (
      
      <div id="home"
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1200% 1200%",
        }}
        className="p-5 rounded-lg container-fluid title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"> 
        
        <Carousel showArrows={false} autoPlay={true} transitionTime={2000} interval={10000} dynamicHeight={false} infiniteLoop={true} showThumbs={false} showStatus={false} centerMode={false}>
                {imgs.map((img, index) => (
                  <div key={`img-${index}`}>
                      <img src={img.img}/>
                  </div>
                ))}
        </Carousel>
        <div id="stars" className="overlay-nc"></div>
        <Container className="overlay text-center">
          <h1 className="display-1">
            {title}
          </h1>
          <Typist className="lead typist" cursor={{ show: false }}>
            {" "}
            {message}
          </Typist>
          <div className="p-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i className={`${icon.image}  fa-3x socialicons`} />
              </a>
            ))}
          </div>
          
          {/* <Link ref={ref} className="btn btn-outline-light btn-lg" to={`/#aboutme`} scroll={el => scrollWithOffset(el)} role="button">          
            More about me
          </Link> */}
          </Container>
      </div>

    );
  }
);

export default MainBody;
