import React from 'react';
import Container from 'react-bootstrap/Container';

const Footer = props => {
  const bgStyle = { backgroundColor: '#f5f5f5' };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        <p>
          <small className="text-muted">
            Project code is open source and available at{' '}
            <a
              className="badge"
              style={{ color: 'black' }}
              rel="noopener"
              target=" _bue"
              href="https://github.com/eliabntt/eliabntt.github.io"
              aria-label="My website"
            >
              <i className="fab fa-github" /> My website
            </a>{' '}
            <br />
            Inspired by the work of <i className="fas fa-code" /> by{' '}
            <a
              className="badge"
              rel="noopener"
              target=" _blue"
              href="https://github.com/hashirshoaeb"
              aria-label="My GitHub"
            >
              Hashir Shoaib.
            </a>{' '}
            Thanks
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
