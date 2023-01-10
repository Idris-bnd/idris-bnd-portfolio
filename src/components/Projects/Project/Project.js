import React from 'react';
import './Project.scss';


function Project({ image, title, lien, skillsList }) {


  return(
    <section className='Project'>
        <img src={image} alt={"image de mon projet:" + title} />

        <div className="Skills">
            <h3>Compétences sur ce projet</h3>
            <h3 className='ProjectTitle'><a href={lien}>{title}</a></h3>

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

    </section>
 )
}
export default Project;