import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { changeFormSkillInputs, getOneSkill, UpdateOneSkill } from '../../../actions/api';
import './UpdateSkill.scss';


function UpdateSkill() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const Skill = useSelector((state) => state.reducer.Skill);
    const cursorLoading = useSelector((state) => state.reducer.webSiteThings.cursorLoading);
    const navigate = useNavigate();
    
    useEffect(() => {

        if (!localStorage.getItem('user')) {
            navigate('/')
            return;
        }

        dispatch(getOneSkill(id));
    }, [])
    const handleChange = (e) => {
        dispatch(changeFormSkillInputs(e.target.name, e.target.value));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(UpdateOneSkill(id));
    }


  return(
    <section className='UpdateSkill'>

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
                <input id={id} onChange={handleChange} required type="number" name="percentage" placeholder="80" value={Skill.percentage} min={10} max={100} disabled={cursorLoading && true } />
            </div>

            <div className="buttonDiv">
                <button disabled={cursorLoading && true }>Envoyer</button>
            </div>
        </form>
        
    </section>
 )
}
export default UpdateSkill;