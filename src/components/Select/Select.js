import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import s from "./Select.module.css"

import { useDispatch, useSelector } from "react-redux";
import {CVReducerActions} from "../redux/action/actionsCVReducer.js"
import { useState , useEffect, } from "react";
import db from "../../firebase"
import { collection ,addDoc, onSnapshot, deleteDoc, doc, setDoc} from 'firebase/firestore';
import { async } from "@firebase/util";



export default function BasicSelect() {
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

  const [age, setAge] = React.useState('');

  const handleChange = async(event) => {
    setAge(event.target.value);

    
    let newValue=[]
    newValue[0]=event.target.value
    newValue[1]=false
    try{ await setDoc(docRef,{
        ...cvInfo[0],
        Language:newValue
       })}
       catch(e){console.log(e)}
    
  };




  return (
    <Box  className={s.Box}>
      <FormControl className={s.FormControl}>
        <InputLabel className={s.InputLabel} >level</InputLabel>
        <Select className={s.select}
        //   labelId="demo-simple-select-label"
        //   id="demo-simple-select"
          value={age}
          label="level"
          onChange={handleChange}
        >
          <MenuItem  className={s.item} value={"Elementary"}>Elementary</MenuItem>
          <MenuItem className={s.item} value={"Pre-intermediate"}>Pre-intermediate</MenuItem>
          <MenuItem className={s.item} value={"Intermediate"}>Intermediate</MenuItem>
          <MenuItem className={s.item} value={"Upper-Intermediate"}>Upper-Intermediate</MenuItem>
          <MenuItem className={s.item} value={"Advanced"}>Advanced</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}