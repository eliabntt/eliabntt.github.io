import React from 'react';
import Container from 'react-bootstrap/Container';

const News = ({ heading, list }) => {
  return (
    <div id="news-div" className="container-fluid bg-light p-5 rounded-lg m-0 target-section">
      <Container className="shadow-lg p-3 mb-5 bg-white rounded">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <div className="px-3 mb-1 table-responsive">
            <table className="table">
              <tbody>
            {list.map((item, index) => (
                <tr key={`item-${index}`}>
                    <td className='alnleft'><b>{item.date}</b></td>
                    <td className='alnright'>
                        {item.url !== "" 
                            ? <a target=" _blank" href={item.url}>{' '} {item.title} </a> 
                            : <p>{' '}{item.title}</p>}
                    </td>
                </tr>
                
            ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default News;
