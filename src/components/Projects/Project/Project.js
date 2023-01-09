import React from 'react';
import './Project.scss';


function Project({ title, imageLink, skillsList, description }) {


  return(
    <section className='Project'>

        <h3>{title}</h3>

        <div className="Project--Informations">
            <div className="leftSide">
                <img src={imageLink} />
            </div>

            <div className="rightSide">

                <div className="rightSide--top">
                    <h3>Compétences utilisées sur ce projet</h3>

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
                                    className="percent"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="rightSide--bottom">
                    <p>{description}</p>
                </div>

            </div>
        </div>

    </section>
 )
}
export default Project;