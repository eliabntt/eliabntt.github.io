import React from "react";
import { BlogBuilder } from "./BlogBuilder";
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
      {bloglist.length > 1 ?   
      <Link to={`/blog#big-blog-div`} scroll={el => scrollWithOffset(el)}>
                More articles here...{" "}
      </Link> : <br/>}
    </div>
  );
};

const BlogCard = ({ index, title, image, description }) => {
  return (
    <div className="m-5">
      <div className="">
        <div className="row">
          <div className="col-4 col-lg-12">
            {<img src={image} className="card-img" alt="..." style={{"max-width": "200px"}} />}
          </div>
          <div className="col-8 col-lg-12">
            <div className="">
              <h1 className="">{title}</h1>
              <p className="lead">{description}</p>
              <Link to={`/blog/${index}#top`} scroll={el => scrollWithOffset(el)}>
                Read more...{" "}
              </Link>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export {Blog, BlogCard};
