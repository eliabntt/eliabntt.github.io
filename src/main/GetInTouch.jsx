import React from "react";
import Obfuscate from 'react-obfuscate';

const GetInTouch = ({ heading, message, email }) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center" id="getintouch">{heading}</h2>
      <p className="lead text-center pb-3">
        {message} {' '}<Obfuscate email={email}/>.
      </p>
    </>
  );
};

export default GetInTouch;
