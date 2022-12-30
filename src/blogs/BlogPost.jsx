import React from "react";
import bloglist from "../main/blog";
import { HashLink as Link } from 'react-router-hash-link';
import NotFound from "../main/NotFound";
import { useParams } from "react-router";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -60; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

const BlogPost = React.forwardRef((props,ref) => {
  let params = useParams();
  const {id} = params;
  const post = bloglist[id];
  if (post === undefined){
    return <NotFound ref={ref} />;
  }

  return (
    <div id="blogpost" ref={ref} className="container-lg mt-5 bg-blue">
      <div id="stars" className="overlay-nc"></div>
      {post && (
        <div>
          <h1 ref={ref} className="display-2 text-center">{post.title}</h1>
          <center>
          <img className="img-fluid mb-2 mwv-40" src={post.image} alt={post.title} />
          </center>
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
