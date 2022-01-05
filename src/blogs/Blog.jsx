import React, { useState } from "react";
import bloglist from "../main/blog";
import { NavHashLink as Link } from 'react-router-hash-link';

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

const Blog = (props) => {
  return (
    <div id="blog-div" className="container-lg mt-5 bg-blue">
      <h1 className="text-center">Peeking in</h1>
      {bloglist.map((value, index) => {
        return (
          <BlogCard
            key={index}
            title={value.title}
            description={value.description}
            image={value.image}
            index={index}
          />
        );
      }).slice(0,3)}
      {bloglist.length > 3 ?   
      <Link to={`/blog#big-blog-div`} scroll={el => scrollWithOffset(el)}>
                More articles here...{" "}
      </Link> : <br/>}
    </div>
  );
};

const BlogCard = ({ index, title, image, description }) => {
  const [buttonText,setButtonText] = useState("Expand description");
  return (
    <div className="m-5">
      <div className="">
        <div className="row">
          <div className="col-4 col-lg-12" id={index}>
            {<img src={image} className="card-img" alt="..." style={{maxWidth: "200px"}} />}
          </div>
          <div className="col-8 col-lg-12">
            <div className="">
              <h1 className="">{title}</h1>
              <div className="box">
                <input type="checkbox" id={"expanded"+index}></input>
                <p className={window.location.href.indexOf("/blog") > -1 ? "lead" : ""}>{description}</p>
                <label htmlFor={"expanded"+index} role="button" onClick={() => (buttonText === "Expand description" ? setButtonText("Collapse") : setButtonText("Expand description"))}>{buttonText}</label>
                <Link to={`/blog/${index}#top`} scroll={el => scrollWithOffset(el)}>
                  Read post{" "}
                </Link>
            </div>

            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export {Blog, BlogCard};
