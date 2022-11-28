import './App.css';
import React from 'react';
import Wrapper from './components/Wrapper';
// import {useDispatch} from "react-redux"
import { useState } from 'react';

import ThemeContext from './components/Context';



function App(props) {
   
    const[themeMode, setThemeMode]=useState(true)
   
   
// const [text,setText]=useState("")


    return ( 

   <>
 <ThemeContext.Provider value={{themeMode, setThemeMode}}>
 <Wrapper    />
 </ThemeContext.Provider>
</>

    );
}


export default App;