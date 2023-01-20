import React from 'react';
import { useSelector } from 'react-redux';
import './LoadingPage.scss';


function LoadingPage() {
    const loading = useSelector((state) => state.reducer.webSiteThings.loader)

  return(
    <section className={`LoadingPage ${!loading && 'none'}`}>
       <ul>
           <li>L</li>
           <li>O</li>
           <li>A</li>
           <li>D</li>
           <li>I</li>
           <li>N</li>
           <li>G</li>
       </ul>
    </section>
 )
}
export default LoadingPage;