import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
  onlineWritings
} from './config.js';
import MainBody from './main/MainBody';
import AboutMe from './main/AboutMe';
import Project from './main/Project';
import Footer from './main/Footer';
import Navbar from './main/Navbar';
import Skills from './main/Skills';
import {Blog, BlogCard} from './blogs/Blog';
import BlogPage from './blogs/BlogPage'
import Publication from './main/Publications';
import BlogPost from './blogs/BlogPost';
import GetInTouch from './main/GetInTouch.jsx';
import Leadership from './main/Leadership.jsx';
import Experience from './main/Experience';
import NotFound from './main/NotFound';

import { HashRouter as Router} from 'react-router-dom'

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
      {experiences.show && <Experience experiences={experiences} />}
      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
      )}
      {leadership.show && (
        <Leadership
          heading={leadership.heading}
          message={leadership.message}
          img={leadership.images}
          imageSize={leadership.imageSize}
        />
      )}
      {blog.show && (
      <Blog/> )}
      {onlineWritings.show && (
        <Publication
          quote={onlineWritings.quote}
          heading={onlineWritings.heading}
          list={onlineWritings.list}
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

const App = () => {
  const titleRef = React.useRef();
  return (
    <Router basename={process.env.PUBLIC_URL}>
      {navBar.show && <Navbar ref={titleRef}/>}
      <Switch>
        <Route exact path='/' component={() => <Home ref={titleRef} />} />
        <Route exact path='/blog' component={() => <BlogPage ref={titleRef} />} />
        <Route path="/blog/:id" component={props => <BlogPost {...props} ref={titleRef} />} />
        <Route component={() => <NotFound ref={titleRef} />} status={404}/>
      </Switch>
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

export default App;
