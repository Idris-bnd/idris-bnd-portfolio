import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Projects from '../Projects/Projects';
import SkillsAndMe from '../SkillsAndMe/SkillsAndMe';
import './App.scss';


function App() {

  return(
    <div className='App'>
       <Header />

       <SkillsAndMe />

       <Projects />
    </div>
 )
}
export default App;