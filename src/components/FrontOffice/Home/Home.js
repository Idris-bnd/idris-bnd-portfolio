import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProjects, getSkills } from '../../../actions/api';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import SkillsAndMe from '../SkillsAndMe/SkillsAndMe';
import './Home.scss';


function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProjects())
        dispatch(getSkills())
     }, [])

  return(
    <>
        <SkillsAndMe />
        <Projects />
        <Footer />
    </>
 )
}
export default Home;