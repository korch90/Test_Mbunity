import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState, useContext } from "react";
import ThemeContext from "./Context";
import s from "../components/Test.module.css"


const Test=()=>{

    const [tex, setTex]=useState([])

// function check(str){
// let arr=str.join("")
// return arr
// }

// console.log(check(["123 4234", "dsd", "sd"]))

    // const {textChack, setTextChack} =useContext(ThemeContext)
    // setTextChack("light")
    // console.log(textChack)


//     let url=[]
  
//      useEffect(()=>{ const options = {
//         method: 'GET',
//         url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
//         headers: {
//           accept: 'application/json',
//           'X-RapidAPI-Key': 'da8a8db973mshbdcb549202eaa4dp163864jsne9ad78339bc8',
//           'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
//         }
//       };
      
//       axios.request(options).then(function (response) {
//           console.log(response.data.value);
//           setTex(response.data.value)
// console.log(tex)
//       }).catch(function (error) {
//           console.error(error);
//       });},[])

return(
    <div className={s.wrapper} >
    Test
 {/* <button onClick={()=>setTex("lighr")} >+</button>  */}
    <hr />
{/* {textChack} */}
{/* {url} */}
{tex}
    </div>
)
}


export default Test