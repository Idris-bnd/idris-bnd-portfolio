import React from 'react';
import { useSelector } from 'react-redux';
import Project from './Project/Project';
import './Projects.scss';


function Projects() {
    const ProjectsList = useSelector((state) => state.reducer.ProjectsList)
    
  return(
    <div id='Projects' className='Projects'>
       <h2>PROJECTS</h2>

        <div className="ProjectDiv">
            {ProjectsList.map((project) => (
                <Project
                    key={project.name}
                    image={project.image}
                    title={project.name}
                    skillsList={project.skills}
                    lien={project.lien}
                />
            ))}
        </div>
       
    </div>
 )
}
export default Projects;