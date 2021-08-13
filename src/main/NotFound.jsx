import React from "react";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const NotFound = React.forwardRef((props,ref) => {
    return (

      <div id="background-404" className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0 jumbotron jumbotron-fluid" style={{backgroundImage: `url('https://media.giphy.com/media/3K0D1Dkqh9MOmLSjzW/giphy.gif')`,
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
        padding:"0",
        margin:"0"}}>
        
          <div className="text-center container">
            <h1 id="title-404" className="display1" ref={ref}>Uh-oh page not found</h1>
          </div>
          
          <div className="bottomleftCopyright" >
          <p>via GIPHY. Star Wars: © & TM Lucasfilm Ltd. All Rights Reserved.</p></div>

        </div>
                     
    );
  });
export default NotFound;