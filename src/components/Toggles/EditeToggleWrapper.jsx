
import React from "react";
import s from "./EditToggleWrapper.module.css"
import { useDispatch, useSelector } from "react-redux";
import {CVReducerActions} from "../redux/action/actionsCVReducer.js"
import { useState , useEffect, useContext} from "react";
import db from "../../firebase"
import { collection ,addDoc, onSnapshot, deleteDoc, doc, setDoc} from 'firebase/firestore';
import { async } from "@firebase/util";



const EditToggleWrapper=(props)=>{ 



  const docRef=doc(db,"Info", "EAm5Om0rBU23VlXioEGY")
  const cvInfo=useSelector(state=>state.CvReducer.cvInfo)
  const collectionRef=collection(db, "Info")
  const dispatch=useDispatch()


  const getInfo=()=>{
    onSnapshot(collectionRef,(snapshot)=>{
        dispatch(CVReducerActions.cvInfoOnInit(snapshot.docs.map(doc=>({ ...doc.data(), id:doc.id}))))
    })
} 

useEffect(()=>{   getInfo()   },[])

const changeMode=async(key)=>{
  if(props.hidden==="hidden"){
 
  }
  else{
    try{ await setDoc(docRef,{
      ...cvInfo[0],
       EditMode:!key
     })}
     catch(e){console.log(e)}
  }


}



return(
    <div className={s.wrapper}>
    <p>Edit mode </p> 
    <label className={s.toggle}>
  <input className={s.toggle_checkbox} type="checkbox" checked={!cvInfo[0]?.EditMode} onChange={()=>{ changeMode(cvInfo[0]?.EditMode)}}  />
  <div className={s.toggle_switch}></div> 
  <span className={s.toggle_label}></span>
</label>


    </div>
)
}


export default EditToggleWrapper