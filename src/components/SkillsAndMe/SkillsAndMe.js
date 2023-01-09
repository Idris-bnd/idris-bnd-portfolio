import React from 'react';
import { useSelector } from 'react-redux';
import './SkillsAndMe.scss';


function SkillsAndMe() {
    const skillsList = useSelector((state) => state.reducer.skillslist)
    console.log(skillsList);


  return(
    <section id='Skills' className='SkillsAndMe'>
       
       <div className="leftSide">

           <div className="leftSide--top">
                <p>Idris Ben Ahmed, développeur front-end React.js.</p>
                <p>Full Télétravail ou présentiel autour d'Annecy</p>
           </div>

           <div className="leftSide--bottom">
               <h3>My Skills</h3>

               {skillsList.map((skill) => (
                   <div key={skill.name} className="skillDiv">

                        <i style={{ color: skill.color}} className={skill.logo}></i>
                        <p>{skill.name}</p>

                        <div className="percentageDiv">
                            <div
                                style={{
                                    width:skill.percentage+"%",
                                    backgroundColor: skill.color
                                }}
                                className="percent" />
                        </div>
                   </div>
               ))}
           </div>

       </div>

       <div className="rightSide">
           <img src="https://cdn.lesnumeriques.com/news/19/194317/f7c5c241-james-webb-la-nasa-devoile-l-image-la-plus-sublime-des-piliers-de-la-creation-a-ce-jour.png" alt="image de l'espace des 'pilliers de la création' " />
       </div>

    </section>
 )
}
export default SkillsAndMe;