import React from 'react';
import Container from 'react-bootstrap/Container';
import Quote from './Quote';

const Publication = ({ heading, list, quote }) => {
  return (
    <div id="publication" className="p-5 rounded-lg container-fluid m-0 target-section">
      <Container className="shadow-lg p-3 mb-5 rounded">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <div className="px-3 mb-1">
          <Quote quote={quote} />
          {list.map((pub, index) => (
            <div key={`publication-${index}`}>
              <a target=" _blank" href={pub.url}>
                {' '}
                {pub.title}
              </a>
              <div className="px-2 py-2 text-muted">{pub.description}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Publication;
