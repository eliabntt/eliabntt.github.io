import React, {useState} from 'react';
import {Redirect, Route, Switch } from 'react-router-dom';
import {
  navBar,
  mainBody,
  about,
  repos,
  leadership,
  skills,
  getInTouch,
  blog,
  experiences,
  onlineWritings,
  news
} from './config.js';
import MainBody from './main/MainBody';
import AboutMe from './main/AboutMe';
import Project from './main/Project';
import Footer from './main/Footer';
import Navbar from './main/Navbar';
import Skills from './main/Skills';
import {Blog} from './blogs/Blog';
import BlogPage from './blogs/BlogPage'
import Publication from './main/Publications';
import BlogPost from './blogs/BlogPost';
import GetInTouch from './main/GetInTouch.jsx';
import Leadership from './main/Leadership.jsx';
import Experience from './main/Experience';
import NotFound from './main/NotFound';
import News from './main/News';

import { HashRouter as Router} from 'react-router-dom'
import { useEffect } from 'react';

import GAListener from './main/GAListener.jsx';

import CookieConsent, {
  getCookieConsentValue,
  Cookies,
} from "react-cookie-consent";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${
          mainBody.lastName
        }`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
        imgs={mainBody.imgs}
      />
    
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}

      {news.show && (<News
        heading={news.heading}
        list={news.list}
        />)}

      {experiences.show && <Experience experiences={experiences} />}

      {leadership.show && (
        <Leadership
          heading={leadership.heading}
          message={leadership.message}
          img={leadership.images}
          imageSize={leadership.imageSize}
        />
      )}
   
      {blog.show && (<Blog/>)}

      {onlineWritings.show && (
        <Publication
          quote={onlineWritings.quote}
          heading={onlineWritings.heading}
          list={onlineWritings.list}
        />
      )}
      
      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
          exclude={repos.excludeRepos}
        />
      )}

      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}


    </>
  );
});

const MyFunc = React.forwardRef((props, titleRef)=> {    

  return(
    <Switch>
      <Route exact path='/' component={() => <Home ref={titleRef} />} />
      <Route exact path='/blog' component={() => <BlogPage ref={titleRef} />} />
      <Route path="/blog/:id" component={props => <BlogPost {...props} ref={titleRef} />} />
      <Route path='/404' component={() => <NotFound ref={titleRef} />} status={404}/>
      <Redirect from='*' to='/404' />
  </Switch>
  );
});

const App = () => {
    const [value, setValue] = useState();

    const titleRef = React.useRef();
    const handleAcceptCookie = () => {
       setValue({});
    };

    const handleDeclineCookie = () => {
      //remove google analytics cookies
      Cookies.remove("_ga");
      Cookies.remove("_gat");
      Cookies.remove("_gid");
      window['ga-disable-UA-203204240-1'] = true;
    };

    useEffect(() => {
      const isConsent = getCookieConsentValue();
      if (isConsent !== "true") {
        window['ga-disable-UA-203204240-1'] = true;
      }
    }, []);

    const consented = getCookieConsentValue();

    return (
    <Router basename={process.env.PUBLIC_URL}>

      {navBar.show && <Navbar ref={titleRef}/>}

      {consented === "true" && <GAListener trackingId="UA-203204240-1"><MyFunc ref={titleRef}/></GAListener>}
      {consented !== "true" && <MyFunc ref={titleRef}/>}


      <CookieConsent
        enableDeclineButton 
        declineButtonText="Disable (optional)"
        onAccept={handleAcceptCookie}
        onDecline={handleDeclineCookie}
      >
        This website uses cookies to enhance the user experience. NOT for marketing.
      </CookieConsent>

      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>

    </Router>
  );
};

export {App, MyFunc};
