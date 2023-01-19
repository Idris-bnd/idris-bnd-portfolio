import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProjects, getSkills } from '../../../actions/api';
import './BackendHome.scss';


function BackendHome() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const ProjectsList = useSelector((state) => state.reducer.ProjectsList);
    const skillsList = useSelector((state) => state.reducer.skillslist);
    console.log(ProjectsList);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
    useEffect(() => {
        if (!localStorage.getItem('user')) {
            navigate('/')
            return;
        }

        !ProjectsList[0] && dispatch(getProjects());
        !skillsList[0] && dispatch(getSkills());
    }, [])

  return(
    <section className='BackendHome'>

        <div className="Projects">
            <h1>Mes projets</h1>
            <div className="ProjectList">

                {ProjectsList.map((Project) => (
                    <div key={Project.id} className="ProjectDiv">
                        <h2>{Project.name}</h2>

                        <h4>Skills du projet</h4>
                        <ul>
                            {Project.skills.map((skill) => (
                                <li>{skill.name} à {skill.percentage}%</li>
                                ))}
                        </ul>

                        <div className="icons">
                            <a href={"/back/update/"+Project.id}>
                                <i className="fa-solid fa-pen-to-square update" />
                            </a>
                            <i className="fa-solid fa-xmark delete" />
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="Skills">

            <h2>Mes skills</h2>
            <p className='warning'>(attention! Cliquer sur une des croix supprimeras immédiatement un skill)</p>
            {skillsList.map((skill) => (
                <div key={skill.id} className="skillDiv">

                    <i style={{ color: skill.color}} className={skill.logo} />
                    <p>{skill.name}</p>

                    <div className="percentageDiv">
                        <div
                            style={{
                                width:skill.percentage+"%",
                                backgroundColor: skill.color
                            }}
                            className="percent" />
                    </div>

                    <a href={"/back/update/"+skill.id}>
                        <i style={{ color: skill.color}} className="fa-solid fa-pen-to-square update" />
                    </a>
                    <i style={{ color: skill.color}} className="fa-solid fa-xmark delete" />
                </div>
            ))}
        </div>
    </section>
 )
}
export default BackendHome;