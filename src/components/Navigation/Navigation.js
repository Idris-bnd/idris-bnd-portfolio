import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setNav } from '../../actions/action';
import './Navigation.scss';


function Navigation() {
    const dispatch = useDispatch();
    const navOpen = useSelector((state) => state.reducer.webSiteThings.navOpen)

    const handleClickNav = () => {
        dispatch(setNav());
    }

  return(
    <div className='Navigation'>
       <div onClick={handleClickNav} className={`menu-btn ${navOpen ? 'open' : ''}`}>
            <div className="menu-btn__burger" />
        </div>

        <ul className={`navigationsLinks ${navOpen ? 'open' : ''}`}>
            <li>
                <a href="#Skills">Skills</a>
            </li>
            <li>
                <a href="#Projects">Projects</a>
            </li>
            <li>
                <a href="#Contact">Contact</a>
            </li>
            <li className='socialNetworks'>
                <a href="https://github.com/Idris-bnd">GitHub</a>
                <a href="https://www.linkedin.com/in/idris-ben-ahmed-61773023a/">Linkedin</a>
            </li>
        </ul>
    </div>
 )
}
export default Navigation;