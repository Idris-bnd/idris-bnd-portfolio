import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveLoader } from '../../../actions/action';
import { getProjects, getSkills } from '../../../actions/api';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import SkillsAndMe from '../SkillsAndMe/SkillsAndMe';
import './Home.scss';


function Home() {
    const dispatch = useDispatch();
    const skillslist = useSelector((state) => state.reducer.skillslist)
    const ProjectsList = useSelector((state) => state.reducer.ProjectsList)
    
    useEffect(() => {
        dispatch(getProjects());
        dispatch(getSkills());
    }, [])
    
    useEffect(() => {
        skillslist[0] && ProjectsList[0] && dispatch(RemoveLoader())
    }, [skillslist, ProjectsList])

  return(
    <>
        <SkillsAndMe />
        <Projects />
        <Footer />
    </>
 )
}
export default Home;