import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNav } from '../../actions/action';
import './Navigation.scss';


function Navigation() {
    const dispatch = useDispatch();
    const navOpen = useSelector((state) => state.reducer.webSite.navOpen)
    
    const handleClickNav = () => {
        dispatch(setNav());
    }

  return(
    <div className='Navigation'>
       <div onClick={handleClickNav} className={`menu-btn ${navOpen ? 'open' : ''}`}>
            <div className="menu-btn__burger" />
        </div>
    </div>
 )
}
export default Navigation;