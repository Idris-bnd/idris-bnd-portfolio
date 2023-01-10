import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Projects from '../Projects/Projects';
import SkillsAndMe from '../SkillsAndMe/SkillsAndMe';
import './App.scss';


function App() {
   const cursorLoading = useSelector((state) => state.reducer.webSiteThings.cursorLoading);
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