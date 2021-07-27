import React from "react";
import bloglist from "../main/blog";

import { NavHashLink as Link } from 'react-router-hash-link';

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

const BlogPost = React.forwardRef((props,ref) => {
  
  const {id} = props.match.params;
  const post = bloglist[id];

  return (
    <div ref={ref} className="container-lg mt-5">
      {post && (
        <div>
          <h1 className="display-2 text-center">{post.title}</h1>
          <h3>
          <Link to={`/blog#${id}`}>
                Go back...{" "}
          </Link>
          </h3>
          <img className="img-fluid mb-2" src={post.image} alt={post.title} />
          {post.getBlog()}
          <h3>
          <Link to={`/blog#${id}`}>
                Go back...{" "}
          </Link>
          </h3>
        </div>
      )}
      {!post && <h1 className="display-1 text-center">{id} 404 - Page not found</h1>}
    </div>
  );
});

export default BlogPost;
