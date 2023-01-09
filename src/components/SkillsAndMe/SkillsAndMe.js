import React from 'react';
import './SkillsAndMe.scss';


function SkillsAndMe() {


  return(
    <section className='SkillsAndMe'>
       
       <div className="leftSide">

           <div className="leftSide--top">
                <p>Idris Ben Ahmed, développeur front-end React.js.</p>
                <p>Full Télétravail ou présentiel autour d'Annecy</p>
           </div>

           <div className="leftSide--bottom">
               <h3>My Skills</h3>
           </div>

       </div>

       <div className="rightSide">
           <img src="https://cdn.lesnumeriques.com/news/19/194317/f7c5c241-james-webb-la-nasa-devoile-l-image-la-plus-sublime-des-piliers-de-la-creation-a-ce-jour.png" alt="image de l'espace" />
       </div>

    </section>
 )
}
export default SkillsAndMe;