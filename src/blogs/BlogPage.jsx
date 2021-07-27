import React from "react";
import { BlogBuilder } from "./BlogBuilder";
import bloglist from "../main/blog";
import { NavHashLink as Link } from 'react-router-hash-link';
import { defaultModifiers } from "@popperjs/core/lib/popper-lite";
import { BlogCard } from "./Blog";

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

export default BlogPage;
