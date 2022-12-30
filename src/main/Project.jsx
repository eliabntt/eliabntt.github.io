import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};

const API = "https://api.github.com";
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/hashirshoaeb/";

const Project = ({ heading, username, length, specfic, exclude}) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos/${username}`;
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      
      // getting all repos
      const response = await axios.get(allReposAPI);
      
      let list = [];
      console.log()
      for(let i = 0; i < response.data.length; i ++){
        if (specfic.includes(response.data[i].name)){
          list.push(i);
        }
        else if (exclude.includes(response.data[i].name)){
          list.push(i);
        }
      }

      for (let i = list.length-1; i >= 0 ; i--){
        response.data.splice(list[i],1);
      }

      // adding specified repos
      try {
        for (let repoName of specfic) {
          const response2 = await axios.get(`${specficReposAPI}/${repoName}`);
          response.data.unshift(response2.data);
        }
      } catch (error) {
        console.error(error.message);
      }
      
      let names = [];
      list = [];
      
      for (let i = 0; i < response.data.length ; i++){
        if (names.includes(response.data[i].name)){
          list.push(i);
        }
        else names.push(response.data[i].name);
      }

      for (let i = list.length-1; i >= 0 ; i--){
        response.data.splice(list[i],1);
      }
      
      // slicing to the length
      try{
        repoList = [...response.data.slice(0, length)];
      }
      catch(error){
        console.log(error);
      }

      // setting projectArray
      // TODO: remove the duplication.
      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, length, specfic, exclude, specficReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <div id="projects" className="bg-light p-5 rounded-lg container-fluid m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {projectsArray.length
            ? projectsArray.map((project, index) => (
                <ProjectCard
                  key={`project-card-${index}`}
                  id={`project-card-${index}`}
                  value={project}
                />
              ))
            : dummyProjectsArr.map((project, index) => (
                <ProjectCard
                  key={`dummy-${index}`}
                  id={`dummy-${index}`}
                  value={project}
                />
              ))}
        </Row>
      </Container>
    </div>
  );
};

export default Project;
