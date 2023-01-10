import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import './Footer.scss';


function Footer() {


  return(
    <div className='Footer'>
        <h2>Thank you !</h2>

        <h4>idris.pro83@yahoo.com</h4>

        <ContactForm />

        <div className="socialNetworks">
            <a href="https://www.linkedin.com/in/idris-ben-ahmed-61773023a/">
                <i className="fa-brands fa-linkedin" />
            </a>

            <a href="https://github.com/Idris-bnd">
                <i className="fa-brands fa-square-github" />
            </a>
        </div>

        <p>© 2022 Idris BEN AHMED, Tous droits réservés.</p>

    </div>
 )
}
export default Footer;