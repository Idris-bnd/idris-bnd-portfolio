import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFormInputs } from '../../../actions/action';
import { sendMail } from '../../../actions/api';
import './ContactForm.scss';


function ContactForm() {
    const dispatch = useDispatch()
    console.log(process.env.REACT_APP_SERVICE_ID);
    console.log(process.env.REACT_APP_TEMPLATE_ID);

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(sendMail())
    };

    const handleChange = (e) => {
        dispatch(changeFormInputs(e.target.name, e.target.value))
    };

  return(
    <form onSubmit={handleSubmit} className='ContactForm'>

        <div className="user">
            <div className="inputDiv">
                <label htmlFor="firstName">Prénom</label>
                <input onChange={handleChange} type="text" name="firstName" placeholder='John' />
            </div>
            <div className="inputDiv">
                <label htmlFor="lastName">Nom</label>
                <input onChange={handleChange} type="text" name="lastName" placeholder='Doe' />
            </div>
        </div>

        <div className="inputDiv">
            <label htmlFor="email">Email</label>
            <input onChange={handleChange} type="text" name="email" placeholder='John.Doe@gmail.com'/>
        </div>

        <div className="inputDiv">
            <label htmlFor="subject">Sujet</label>
            <input onChange={handleChange} type="text" name="subject" placeholder="Offre d'emploi"/>
        </div>

        <div className="inputDiv">
            <label htmlFor="msgContent">Message</label>
            <textarea onChange={handleChange} name="msgContent" placeholder="Hello Idris, tu nous intéresse beaucoup donc nous te proposons de rejoindre notre magnifique entreprise"></textarea>
        </div>

        <button>Envoyer</button>

    </form>
 )
}
export default ContactForm;