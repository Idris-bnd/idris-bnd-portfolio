import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeLoginInputs, makeLoginInputsError, RemoveLoader, SendLoginForm } from '../../../actions/action';
import './Login.scss';


function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const values = useSelector((state) =>state.reducer.LoginInputs)
    const LoginBool = useSelector((state) =>state.reducer.webSiteThings.loginForm)
    const cursorLoading = useSelector((state) => state.reducer.webSiteThings.cursorLoading);

    useEffect(() => {
        if (localStorage.getItem('user')) {
            navigate('/back');
            return;
        }

        if (localStorage.getItem('remember')) {
            const infos = JSON.parse(localStorage.getItem('remember'));
            dispatch(changeLoginInputs("email", infos.email));
            dispatch(changeLoginInputs("pwd", infos.pwd));
            dispatch(changeLoginInputs("remember", true));
        }

        setTimeout(() => {
            dispatch(RemoveLoader());
        }, 1000)
    }, [])

    const handleChange = (e) => {
        if (e.target.name === "remember") {
            dispatch(changeLoginInputs(e.target.name, e.target.checked));
            return;
        }
        dispatch(changeLoginInputs(e.target.name, e.target.value));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        for (const value in values) {
            const element = values[value];
            if (value !== "remember") {
                if (element.length > 0 ) {

                    if (value == "email") {
                        if (element != process.env.REACT_APP_EMAIL) {
                            dispatch(makeLoginInputsError("notSend"))
                            return;
                        }
                    }
                    if (value == "pwd") {
                        if (element !== process.env.REACT_APP_MDP) {
                            dispatch(makeLoginInputsError("notSend"))
                            return;
                            
                        }
                    }
                }else{
                    dispatch(makeLoginInputsError("champs"))
                    return;
                }
            }

            if (value === "remember") {
                if (element === true) {
                    localStorage.setItem('remember', JSON.stringify({
                        email: values.email,
                        pwd: values.pwd,
                    }));
                }
            }
        }

        dispatch(SendLoginForm());

        setTimeout(() => {
            navigate('/back')
        }, 3000)
    }


  return(
    <section className={`Login ${cursorLoading ? 'loading' : ''}`}>

        <h4>Formulaire de connexion</h4>

        <form onSubmit={handleSubmit}>
                <div className="inputDiv">
                    <label htmlFor="email">Email</label>
                    <input onChange={handleChange} type="text" name="email" placeholder='John.Doe@gmail.com' value={values.email} disabled={cursorLoading && true } />
                </div>

                <div className="inputDiv">
                    <label htmlFor="pwd">Mot de passe</label>
                    <input onChange={handleChange} type="password" name="pwd" placeholder="Mot de passe" value={values.pwd} disabled={cursorLoading && true } />
                </div>

                <div className="inputDiv checkbox">
                    <label htmlFor="remember">Se souvenir de moi</label>
                    <input onChange={handleChange} type="checkbox" name="remember" checked={values.remember} disabled={cursorLoading && true } />
                    <p className={LoginBool.champs ? "" : "false"}>Veuillez remplir tout les champs avant d'envoyer le formulaire S.V.P</p>
                    <p className={LoginBool.notSend ? "" : "false"}>L'email ou le mot de passe n'est pas correct.</p>
                    <p className={LoginBool.send ? "send" : ""}>Vous allez être redirigé vers le back-office dans 3 secondes.</p>
                </div>

                <div className="buttonDiv">
                    <button disabled={cursorLoading && true }>Envoyer</button>
                </div>
        </form>

    </section>
 )
}
export default Login;