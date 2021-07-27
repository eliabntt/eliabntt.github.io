import React from "react";

import axios from "axios";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const NotFound = React.forwardRef((props,ref) => {
    return (
      <div id="big-blog-div" className="container-lg mt-5 bg-blue">
        <br></br>
        <h1 id="big-blog-div" className="text-center" ref={ref}>Uh-oh page not found</h1>
      </div>
    );
  });
export default NotFound;