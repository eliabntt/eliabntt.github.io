import React, { Fragment } from "react";

class BlogBuilder {
  


  list = [];

  constructor({ title, image, description }) {
    this.title = title;
    this.image = image;
    this.description = description;
  }

  addParagraph = (props) => {
    this.list.push(
      <p key={this.list.length} align="justify" className="lead">
        {props}
      </p>
    );
    return this;
  };

  addVideo = (props) => {
    this.list.push(
    <div key={this.list.length} className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src={props}></iframe>
    </div>);
    return this;
  }

  addCode = (props) => {
    this.list.push(
      <p key={this.list.length} className="lead">
        You can find the <i className="fas fa-code"/> implementation and the set-up procedure <i className='fab fa-github' /><a className='badge badge-dark' 
          rel='noopener noreferrer' 
          target='_blank' 
          href={props} 
          aria-label='iRotate' > here </a>{' '}
      </p>
    );
    return this;
  };

  addPaper = (props) => {
    this.list.push(
      <p key={this.list.length} className="lead">
        The <i class="fas fa-scroll"/> is accessible open-source <i class="fas fa-book-open"/><a className='badge badge-dark' 
          rel='noopener noreferrer' 
          target='_blank' 
          href={props} 
          aria-label='iRotate' > here </a>{' '}
      </p>
    );
    return this;
  };
  
  addHeading = (props) => {
    this.list.push(
      <Fragment key={this.list.length}>
        <h1 className="">{props}</h1>
        <hr />
      </Fragment>
    );
    return this;
  };

  addSubHeading = (props) => {
    this.list.push(
      <Fragment key={this.list.length}>
        <h3 className="">{props}</h3>
        <hr />
      </Fragment>
    );
    return this;
  };

  addImage = (props) => {
         this.list.push(
           <Fragment key={this.list.length}>
             <img src={props} className="card-img" alt="..."/>
             <hr />
           </Fragment>
         );
         return this;
       };

  addCitation = (props) => {
    this.list.push(
    <Fragment key={this.list.length}>
        
    <div className="snippet-clipboard-content position-relative">
      <pre>    
        <code dangerouslySetInnerHTML={{__html:props}}></code>
      </pre>
      <div className="zeroclipboard-container right-0 top-0 position-absolute">
      <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w" value={props} tabindex="0" role="button">
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-paste js-clipboard-clippy-icon m-2">
          <path fillRule="evenodd" d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"></path>
        </svg>
        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-check js-clipboard-check-icon color-text-success d-none m-2">
          <path fillRule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
        </svg>
      </clipboard-copy>
      </div>
    </div>
    <hr />
    </Fragment>
    );
    return this;
  };

  getBlog = () => {
    return <div className="container-lg">{this.list}</div>;
  };
}

export { BlogBuilder };
