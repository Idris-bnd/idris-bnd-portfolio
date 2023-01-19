import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../../actions/api';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Projects from '../Projects/Projects';
import SkillsAndMe from '../SkillsAndMe/SkillsAndMe';
import './App.scss';


function App() {
   const dispatch = useDispatch();
   const cursorLoading = useSelector((state) => state.reducer.webSiteThings.cursorLoading);

   useEffect(() => {
      dispatch(getProjects())
   }, [])
  return(
    <div className={`App ${cursorLoading ? 'loading' : ''}`}>
       <Header />

       <SkillsAndMe />

       <Projects />

       <Footer />
    </div>
 )
}
export default App;