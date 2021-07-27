import React from "react";
import { BlogBuilder } from "./BlogBuilder";
import bloglist from "../main/blog";
import { NavHashLink as Link } from 'react-router-hash-link';
import { defaultModifiers } from "@popperjs/core/lib/popper-lite";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

const BlogPage = React.forwardRef((props,ref) => {
  return (
    <div id="big-blog-div" className="container-lg mt-5 bg-blue">
      <h1 id="big-blog-div" className="text-center" ref={ref}>Peeking in</h1>
      {bloglist.map((value, index) => {
        return (
          <BlogCard
            id={index}
            key={index}
            title={value.title}
            description={value.description}
            index={index}
            image={value.image}
          />
        );
      })}
    </div>
  );
});

const BlogCard = ({ id, index, title, image, description }) => {
  return (
    <div className="m-5" id={id}>
      <div className="">
        <div className="row">
          <div className="col-4 col-lg-12">
            {<img src={image} className="card-img" alt="..." style={{ width: '14rem' }}/>}
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

export default BlogPage;
