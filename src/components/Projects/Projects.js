import React from 'react';
import { useSelector } from 'react-redux';
import Project from './Project/Project';
import './Projects.scss';


function Projects() {

    const ProjectsList = useSelector((state) => state.reducer.ProjectsList)
    console.log(ProjectsList);

  return(
    <div id='Projects' className='Projects'>
       <h2>Projects</h2>

        {ProjectsList.map((project) => (
            <Project
                key={project.name}
                title={project.name}
                skillsList={project.skills}
                description={project.description}
            />
        )
        )}
       
    </div>
 )
}
export default Projects;