import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BackendHome.scss';


function BackendHome() {
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem('user')) {
            navigate('/')
        }
    }, [])
  return(
    <section className='BackendHome'>
       BackendHome
    </section>
 )
}
export default BackendHome;