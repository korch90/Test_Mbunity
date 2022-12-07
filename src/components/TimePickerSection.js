import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useDispatch, useSelector } from "react-redux";
import {CVReducerActions} from "./redux/action/actionsCVReducer"
import {useState , useEffect} from "react";
import db from "../firebase"
import { collection ,addDoc, onSnapshot, deleteDoc, doc, setDoc} from 'firebase/firestore';
import { async } from "@firebase/util";
import {ActionTimeReducer} from "./redux/action/ActionChatTimeReducer"


export default function ResponsiveDatePickers(props) {

 const [value, setValue] = React.useState(dayjs('2000-02-02'));
 const docRef=doc(db,"Info", "EAm5Om0rBU23VlXioEGY")
// console.log(value)
// console.log(props)

// let y='2000-02-02'
// y=y.split('')
// y.splice(4,3)
// y=y.join('')
//  console.log(y.split('').splice(4,3).join(""))
//  console.log(y.split('').filter((el,index)=>el[index]===el[4]).join(""))

 


 const cvInfo=props.cvInfo
 const index=props.index
 const since_to=props.since_to
//  console.log(cvInfo[0])
 const collectionRef=collection(db, "Info")
 const dispatch=useDispatch()


const getInfoTime=()=>{
    onSnapshot(collectionRef,(snapshot)=>{
       
        dispatch(CVReducerActions.cvInfoOnInit(snapshot.docs.map(doc=>({ ...doc.data(), id:doc.id}))))
    })
 
} 

useEffect(()=>{   getInfoTime()   },[])

  const editInfo2= async(newValue)=>{
let name=props.name


let timeOnCalendar=cvInfo[0][name]||[]
 
 console.log(timeOnCalendar)



 timeOnCalendar[index][since_to]=newValue
 console.log(timeOnCalendar)

       try{ await setDoc(docRef,{
         ...cvInfo[0],
        [name]:timeOnCalendar
        
       })
    }
       catch(e){console.log(e)}
 }

  return  (
  
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    
      <Stack spacing={1}>
   
         <DesktopDatePicker
          label={props.since_to}
        
          value={value}
          
          minDate={dayjs('1900-01-01')}
          onChange={(newValue) => {
           
            setValue(newValue);
            // console.log(newValue)
           let year=newValue["$y"]
           let day=newValue["$D"]
           let mounth=(newValue["$M"]+1)
           if(mounth<10){
            mounth=`0${mounth}`
           }
           console.log(newValue)
           console.log(value)
           let time=mounth+"/"+day+ "/"+ year 
// console.log(time)
            editInfo2(time)
          }}
          renderInput={(params) => <TextField {...params} />}
        />
       
      </Stack>
    </LocalizationProvider>

  );
}
