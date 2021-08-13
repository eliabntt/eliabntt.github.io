import React from 'react';
import Container from 'react-bootstrap/Container';

const Footer = props => {
  const bgStyle = { backgroundColor: '#f5f5f5' };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
            <small>
            Project <i className="fas fa-code" />  is open source and available {' '}
            <i className="fab fa-github" /><a
              className="badge badge-dark"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/eliabntt/eliabntt.github.io"
              aria-label="My website"
            >
             here
            </a>{' '}
            <br />
            Inspired by the work of {' '}
            <a
              className="badge badge-dark"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/hashirshoaeb"
              aria-label="Original repo"
            >
              Hashir Shoaib.
            </a>{' '}
            Thanks.
            <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </small>
      </Container>
    </footer>
  );
};

export default Footer;
