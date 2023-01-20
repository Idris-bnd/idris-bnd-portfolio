import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { login, logout } from '../../actions/action';
import BackendHome from '../BackOffice/BackendHome/BackendHome';
import Header from '../Header/Header';
import Home from '../FrontOffice/Home/Home';
import Login from '../BackOffice/Login/Login';
import './App.scss';
import UpdateProject from '../BackOffice/UpdateProject/UpdateProject';
import CreateProject from '../BackOffice/CreateProject/CreateProject';
import UpdateSkill from '../BackOffice/UpdateSkill/UpdateSkill';
import CreateSkill from '../BackOffice/CreateSkill/CreateSkill';


function App() {
   const cursorLoading = useSelector((state) => state.reducer.webSiteThings.cursorLoading);
   const dispatch = useDispatch()
   useEffect(() => {
      if (localStorage.getItem('user')) {
         const user = JSON.parse(localStorage.getItem('user'))
         dispatch(login(user))

         if (Date.now() > user.time) {
            dispatch(logout())
            localStorage.removeItem('user')
         }
     }
   })

  return(
    <div className={`App ${cursorLoading ? 'loading' : ''}`}>

       <BrowserRouter>
         <Header />
            <Routes>

               <Route path="/" element={<Home />} />
               <Route path="/back/login" element={<Login />} />
               <Route path="/back" element={<BackendHome />} />
               <Route path="/back/update/project/:id" element={<UpdateProject />} />
               <Route path="/back/create/project" element={<CreateProject />} />
               <Route path="/back/update/skill/:id" element={<UpdateSkill />} />
               <Route path="/back/create/skill" element={<CreateSkill />} />

            </Routes>
       </BrowserRouter>

    </div>
 )
}
export default App;