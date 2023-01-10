import React from 'react';
import './ContactForm.scss';


function ContactForm() {


  return(
    <form className='ContactForm'>

        <div className="user">
            <div className="inputDiv">
                <label htmlFor="firstName">Prénom</label>
                <input type="text" name="firstName" placeholder='John' />
            </div>
            <div className="inputDiv">
                <label htmlFor="lastName">Nom</label>
                <input type="text" name="lastName" placeholder='Doe' />
            </div>
        </div>

        <div className="inputDiv">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder='John.Doe@gmail.com'/>
        </div>

        <div className="inputDiv">
            <label htmlFor="msgContent">Message</label>
            <textarea name="msgContent" placeholder="Hello Idris, tu nous intéresse beaucoup donc nous te proposons cette magnifique offre d'emploi"></textarea>
        </div>

        <button>Envoyer</button>

    </form>
 )
}
export default ContactForm;