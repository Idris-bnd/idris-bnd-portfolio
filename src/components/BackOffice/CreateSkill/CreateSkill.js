import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFormSkillInputs, createOneSkill } from '../../../actions/api';
import './CreateSkill.scss';


function CreateSkill() {
    const dispatch = useDispatch();
    const Skill = useSelector((state) => state.reducer.Skill);
    const cursorLoading = useSelector((state) => state.reducer.webSiteThings.cursorLoading);

    const handleChange = (e) => {
        dispatch(changeFormSkillInputs(e.target.name, e.target.value));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createOneSkill());
    }


  return(
    <section className='CreateSkill'>

        <h4>Modifier le skill: {Skill.name}</h4>

        <form onSubmit={handleSubmit}>
            <div className="inputDiv">
                <label htmlFor="name">Nom du skill</label>
                <input onChange={handleChange} required type="text" name="name" placeholder='Nom du skill' value={Skill.name} disabled={cursorLoading && true } />
            </div>

            <div className="inputDiv">
                <label htmlFor="logo">Classe</label>
                <input onChange={handleChange} required type="text" name="logo" placeholder="classe font awesome" value={Skill.logo} disabled={cursorLoading && true } />
            </div>

            <div className="inputDiv">
                <label htmlFor="color">couleur du skill</label>
                <input onChange={handleChange} required type="text" name="color" placeholder="https://facebook.com" value={Skill.color} disabled={cursorLoading && true } />
            </div>

            <div className="inputDiv">
                <label htmlFor="percentage">Pourcentage du skill</label>
                <input onChange={handleChange} required type="number" name="percentage" placeholder="80" value={Skill.percentage} min={10} max={100} disabled={cursorLoading && true } />
            </div>

            <div className="buttonDiv">
                <button disabled={cursorLoading && true }>Envoyer</button>
            </div>
        </form>
        
    </section>
 )
}
export default CreateSkill;