import s from "../CV/CV_Admin.module.css"

 import { useDispatch, useSelector } from "react-redux";
 import {CVReducerActions} from "../redux/action/actionsCVReducer.js"
 import ThemeContext from "../Context.jsx"
 import { useEffect, useContext} from "react";
 import db from "../../firebase"
 import { collection , onSnapshot, doc} from 'firebase/firestore';





const CVAdmin=()=>{

const {themeMode, setThemeMode} =useContext(ThemeContext)
const docRef=doc(db,"Info", "EAm5Om0rBU23VlXioEGY")
const cvInfo=useSelector(state=>state.CvReducer.cvInfo)
const collectionRef=collection(db, "Info")
const dispatch=useDispatch()

const getInfo=()=>{
    onSnapshot(collectionRef,(snapshot)=>{
        dispatch(CVReducerActions.cvInfoOnInit(snapshot.docs.map(doc=>({ ...doc.data(), id:doc.id}))))
    })
} 
useEffect(()=>{  getInfo() },[])


return(
    <div className={s.container +' '+(themeMode? s.light:s.dark)  } >

<div className={s.leftSide}  >

<div className={s.bigRound} ></div>
<div  className={s.ava  }></div>
<div className={s.Name}>
<h2> {cvInfo[0]?.name} </h2> </div>

<div className={s.Contacts}>

    <h3> <span>CON</span>TACT INFO</h3>
  <div className={s.parent}><div  className={s.imgPhone}></div> 
    <a href = {"tel:"+cvInfo[0]?.phone}>{cvInfo[0]?.phone}</a> </div>

    <div className={s.parent}><div  className={s.imgEmail}></div> 
    <a href = {"mailto:"+cvInfo[0]?.email}>{cvInfo[0]?.email}</a></div>

    <div className={s.parent}><div  className={s.imgLoc}></div> 
    <a href = "#">{cvInfo[0]?.location}</a></div>

   <div className={s.parent}><div  className={s.imgLink}></div> 
   <a href = "https://www.linkedin.com/in/andrian-korchinsky-23933715a/"></a></div>

<div className={s.parent}><div  className={s.imgGit}></div> 
<a href = {"https://github.com/"+cvInfo[0]?.git}>{cvInfo[0]?.git}</a> </div>

<div className={s.parent}><div  className={s.imgFB}></div> 
<a href = "https://www.facebook.com/profile.php?id=100001685307964">{cvInfo[0]?.fb}</a></div>

    
    
        
</div>
<div className={s.WorkSkills}>
<h3><span >WOR</span>K SKILLS</h3>

<div className={s.WorkSkillsImg}><div>HTML</div><div className={s.line}><hr style={{ width: cvInfo[0]?.html}} className={s.lineGreen} /> <hr className={s.lineWhite} /></div></div>
<div className={s.WorkSkillsImg}><div>CSS</div><div  className={s.line}><hr style={{ width: cvInfo[0]?.CSS}} className={s.lineGreen} /> <hr className={s.lineWhite} /></div></div>
<div className={s.WorkSkillsImg}><div>Javasquirt</div><div className={s.line}><hr style={{ width: cvInfo[0]?.Javasquirt}} className={s.lineGreen} /> <hr className={s.lineWhite} /></div></div>
<div className={s.WorkSkillsImg}><div>React</div><div className={s.line}><hr style={{ width: cvInfo[0]?.React}} className={s.lineGreen} /> <hr className={s.lineWhite} /></div></div>
<div className={s.WorkSkillsImg}><div>GIT</div><div  className={s.line}><hr style={{ width: cvInfo[0]?.GIT}} className={s.lineGreen} /> <hr className={s.lineWhite} /></div></div>
<div className={s.WorkSkillsImg}><div>Typescript</div><div className={s.line}><hr style={{ width: cvInfo[0]?.Typescript}} className={s.lineGreen} /> <hr className={s.lineWhite} /></div></div>
<div className={s.WorkSkillsImg}><div>React Redux </div><div className={s.line}><hr style={{ width: cvInfo[0]?.Redux}} className={s.lineGreen} /> <hr className={s.lineWhite} /></div></div>

</div>
</div>

<div></div>
<div className={s.rightSide}>
<div className={s.rightSideSection}>
    <h4>WORK EXPERIENCE</h4>

    {cvInfo[0]?.workExperience?.map((el,index)=> <div  key={ index}  >  <div  className={s.workExpSectionWrapper} > 
   </div>  </div> )}
  
</div>
<hr />
<div className={s.rightSideSection}>
<h4>EDUCATION </h4>
<p>2007 - 2012</p>
<p>LVIV POLYTECHNIC UNIVERSITY</p>
<br />
<p>2022 - 2022</p>
<p>LOGOS IT ACADEMY</p>
</div>
<hr />
<div className={s.rightSideSection}>
 <h4>PERSONAL QUALITIES</h4>

<p>Responsible, efficient, erudite, punctual, having a good sense of humor</p>
</div>
<hr />
<div className={s.rightSideSection}>

<h4>LANGUAGES</h4>
<p>ENGLISH

</p>
</div>
<hr />
<div className={s.rightSideSection}>

<h4>HOBBIES</h4>
<p>stand shooting

</p>
</div>
</div>




    </div> 
)
}

export default CVAdmin