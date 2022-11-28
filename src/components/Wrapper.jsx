
import React from "react";
import s from './wrapper.module.css';
import { Routes,Route, NavLink } from "react-router-dom";
import Test from './Test.jsx'
import { useState, useContext } from "react";
import News from './News/News.jsx'
import Header from "./Header/Header.jsx"
import Home from '../components/Home'
import ChuckNorrisTalking from "../components/ChuckNorrisTalking/ChuckNorrisTalking.jsx"
import CVAdmin from "./CV/CVAdmin"
import CV from "./CV/CV"
import Login from "../components/Login/Login"
import {AppRoutes} from "../RoutesStorage";
import SignUp  from "../components/Login/SignUp/SignUp"
import SignIn from '../components/Login/SignIn/SignIn'
import { useNavigate } from "react-router-dom";


const Wrapper=()=>{
        const navigate=useNavigate()
        // setTimeout( ()=>navigate(AppRoutes.HOME),2200)

        if(window.location.href==='https://korch90.github.io/'){
                setTimeout( ()=>navigate(AppRoutes.CV),500)

        }
//        console.log(window.location.href ) 

        const[themeMode, SetThemeMode]=useState("light")
        return (      
   
          <div className = {s.wrapper}  >
     
          
<Header/>
{/* {<Home />} */}
<Routes>
<Route path={AppRoutes.CV} element={<CV />} />
<Route path={AppRoutes.CV_Admin} element={<CVAdmin />} />
<Route path={AppRoutes.HOME} element={<Home />} />
<Route path={AppRoutes.NEWS} element={<News />} />
<Route  path={AppRoutes.TEST} element={<Test/>} />
<Route  path={AppRoutes.LOGIN} element={<Login/>} />
<Route  path={AppRoutes.CHUC_HNORIS_TALKING} element={<ChuckNorrisTalking/>} />
<Route path={AppRoutes.SIGNUP} element={<SignUp />} />
<Route path={AppRoutes.SIGNIN} element={<SignIn />} />

  
</Routes>

         </div>
        
        )
}


export default Wrapper