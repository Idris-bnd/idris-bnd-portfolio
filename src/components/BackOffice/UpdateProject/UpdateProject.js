import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AddProjectSkill, changeFormProjectInputs, changeFormProjectSkillsInputs, deleteProjectSkill, getOneProject, UpdateOneProject } from '../../../actions/api';
import './UpdateProject.scss';


function UpdateProject() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const Project = useSelector((state) => state.reducer.Project);
    const cursorLoading = useSelector((state) => state.reducer.webSiteThings.cursorLoading);
    console.log(Project);
    useEffect(() => {
        dispatch(getOneProject(id));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()
        
        dispatch(UpdateOneProject(id, Project))
    };

    const handleChange = (e) => {
        dispatch(changeFormProjectInputs(e.target.name, e.target.value));
    };

    const handleChangeSkill = (e) => {
        dispatch(changeFormProjectSkillsInputs(e.target.id, e.target.name, e.target.value));
        const object = Project.skills[e.target.id];
        switch(e.target.name){
            case 'skillName':{
                console.log('hey');
                object.name = e.target.value;
            }
            break;
            case 'skillClass':{
                console.log('hey');
                object.logo = e.target.value;
            }
            break;
            case 'skillColor':{
                console.log('hey');
                object.color = e.target.value;
            }
            break;
            case 'skillPercentage':{
                console.log('hey');
                object.percentage = e.target.value;
            }
            break;
        }
    };

    const handleAddSkill = (e) => {
        dispatch(AddProjectSkill());
    }

    const handleDeleteSkill = (e) => {
        const object = Project.skills[e.target.id];

        const newArray = [];
        Project.skills.forEach((skill) => {
           if (skill != object) {
              newArray.push(skill)
           }
        })
        console.log(newArray);
        dispatch(deleteProjectSkill(newArray));
     };

  return(
    <section className='UpdateProject'>

        <h4>Modifier le projet: {Project.name}</h4>

        <form onSubmit={handleSubmit}>

            <div className="inputDiv">
                <label htmlFor="name">Nom du projet</label>
                <input onChange={handleChange} required type="text" name="name" placeholder='Nom du projet' value={Project.name} disabled={cursorLoading && true } />
            </div>

            <div className="inputDiv">
                <label htmlFor="image">image</label>
                <input onChange={handleChange} required type="text" name="image" placeholder="Lien vers une image" value={Project.image} disabled={cursorLoading && true } />
            </div>

            <div className="inputDiv">
                <label htmlFor="lien">Lien vers le projet</label>
                <input onChange={handleChange} required type="text" name="lien" placeholder="https://facebook.com" value={Project.lien} disabled={cursorLoading && true } />
            </div>

            <div className="skillsDiv">
                
                <h5>Skills du projet</h5>

                {Project.skills.map((skill, id) => (
                    <div key={id} className="inputDiv">
                        <label htmlFor="skillName">
                            <i style={{ color: skill.color}} className={skill.logo + " logo"} />
                            Nom du skill
                            {skill.xmark && (
                                    <i onClick={handleDeleteSkill} id={id} className="fa-solid fa-xmark xmark" />
                            )}
                        </label>
                        <input id={id} onChange={handleChangeSkill} required type="text" name="skillName" placeholder="React" value={skill.name} disabled={cursorLoading && true } />

                        <label htmlFor="skillClass">Classe du skill</label>
                        <input id={id} onChange={handleChangeSkill} required type="text" name="skillClass" placeholder="fa-brands fa-react" value={skill.logo} disabled={cursorLoading && true } />

                        <label htmlFor="skillColor">Couleur du skill</label>
                        <input id={id} onChange={handleChangeSkill} required type="text" name="skillColor" placeholder="#61DBFB" value={skill.color} disabled={cursorLoading && true } />

                        <label htmlFor="skillPercentage">Pourcentage du skill</label>
                        <input id={id} onChange={handleChangeSkill} required type="number" name="skillPercentage" placeholder="80" value={skill.percentage} min={10} max={100} disabled={cursorLoading && true } />
                    </div>
                ))}

            {Project.skills.length < 10 && (
            <div className="inputLabel button">
                <p className='AddSkill' onClick={handleAddSkill}>Ajouter un skill</p>
            </div>
            )}

            </div>

            <div className="buttonDiv">
                <button disabled={cursorLoading && true }>Envoyer</button>
            </div>

        </form>
    </section>
 )
}
export default UpdateProject;