import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFormInputs, makeFormInputsError, makeFormInputsTrue } from '../../../../actions/action';
import { sendMail } from '../../../../actions/api';
import './ContactForm.scss';


function ContactForm() {
    const dispatch = useDispatch()
    const values = useSelector((state) =>state.reducer.ContactInputs)
    const contactBool = useSelector((state) =>state.reducer.webSiteThings.contactForm)
    const cursorLoading = useSelector((state) => state.reducer.webSiteThings.cursorLoading);

    const handleSubmit = (e) => {
        e.preventDefault()

        for (const name in values) {
            const value = values[name];
            if (value.length > 0) {
                dispatch(makeFormInputsTrue("champs"))
                switch (name) {
                    case 'email':
                        if (value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                            dispatch(makeFormInputsTrue(name));
                        }else{
                            dispatch(makeFormInputsError(name));
                            return;
                        }
                    break;
                    case 'subject':
                        if (value.match(/^[\w.'\séèçù?!à]+$/)) {
                            dispatch(makeFormInputsTrue(name));

                        }else{
                            dispatch(makeFormInputsError(name));
                            return;
                        }
                    break;
                    case 'msgContent':
                        if (value.match(/^[\w.'"\séèçù?!à@,]+$/)) {
                            dispatch(makeFormInputsTrue(name));
                        }else{
                            dispatch(makeFormInputsError(name));
                            return;
                        }
                    break;           
                    default:
                        if (value.match(/^[\w\s]+$/)) {
                            dispatch(makeFormInputsTrue(name));
                        }else{
                            dispatch(makeFormInputsError(name));
                            return;
                        }
                    break;
                }
            }else{
                dispatch(makeFormInputsError("champs"))
                return;
            }
        }

        // dispatch(sendMail());
    };

    const handleChange = (e) => {
        dispatch(changeFormInputs(e.target.name, e.target.value))
    };

  return(
    <form onSubmit={handleSubmit} className={`ContactForm ${cursorLoading ? 'loading' : ''}`}>

        <div className="user">
            <div className="inputDiv">
                <label htmlFor="firstName">Prénom</label>
                <input onChange={handleChange} type="text" name="firstName" placeholder='John' value={values.firstName} disabled={cursorLoading && true }/>
                <p className={contactBool.firstName ? "" : "false"}>seulement les lettres de A à Z sont autorisés</p>
            </div>
            <div className="inputDiv">
                <label htmlFor="lastName">Nom</label>
                <input onChange={handleChange} type="text" name="lastName" placeholder='Doe' value={values.lastName} disabled={cursorLoading && true } />
                <p className={contactBool.lastName ? "" : "false"}>seulement les lettres de A à Z sont autorisés</p>
            </div>
        </div>

        <div className="inputDiv">
            <label htmlFor="email">Email</label>
            <input onChange={handleChange} type="text" name="email" placeholder='John.Doe@gmail.com' value={values.email} disabled={cursorLoading && true } />
            <p className={contactBool.email ? "" : "false"}>Veuillez respecter le format email.</p>

        </div>

        <div className="inputDiv">
            <label htmlFor="subject">Sujet</label>
            <input onChange={handleChange} type="text" name="subject" placeholder="offre d'emploi" value={values.subject} disabled={cursorLoading && true } />
            <p className={contactBool.subject ? "" : "false"}>seulement les lettres, chiffres et cette liste de caractères est autorisé: éèçù?!à,.'</p>
        </div>

        <div className="inputDiv">
            <label htmlFor="msgContent">Message</label>
            <textarea onChange={handleChange} name="msgContent" placeholder="Hello Idris, tu nous intéresse beaucoup donc nous te proposons cette magnifique offre d'emploi :)" value={values.msgContent} disabled={cursorLoading && true } />
            <p className={!contactBool.msgContent && 'false'}>seulement les lettres, chiffres et cette liste de caractères est autorisé: éèçù?!à,.@"'</p>
            <p className={!contactBool.champs && 'false'}>Veuillez remplir tout les champs avant d'envoyer le formulaire S.V.P</p>
            <p className={!contactBool.notSend && 'false'}>L'email n'as pas aboutit, veuillez re essayer ou directement me contacter via l'email ci-dessus.</p>
            <p className={contactBool.send && 'send'}>L'email a bien été envoyé, merci d'utiliser nos services</p>
        </div>

        <button disabled={cursorLoading && true }>Envoyer</button>

    </form>
 )
}
export default ContactForm;