import React from "react";
import bloglist from "../main/blog";
import { NavHashLink as Link } from 'react-router-hash-link';
import NotFound from "../main/NotFound";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -60; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

const BlogPost = React.forwardRef((props,ref) => {
  console.log(props);
  const {id} = props.match.params;
  const post = bloglist[id];
  if (post === undefined){
    return <NotFound ref={ref} />;
  }

  return (
    <div ref={ref} className="container-lg mt-5">
      {post && (
        <div>
          <h1 className="display-2 text-center">{post.title}</h1>
          <img className="img-fluid mb-2" src={post.image} alt={post.title} />
          {post.getBlog()}
          <h3>
          <div>
            <button role="button" className="btn btn-outline-dark btn-lg" onClick={() => {props.history.goBack();}} style={{margin:"2px"}}>Go Back</button>
            <Link to={`/blog#`}  scroll={el => scrollWithOffset(el)} role="button" className="btn btn-outline-dark btn-lg" >
              Blog list{" "}
            </Link>
          </div>
          </h3>
        </div>
      )}
      {!post && <h1 className="display-1 text-center">{id} 404 - Page not found</h1>}
    </div>
  );
});

export default BlogPost;
