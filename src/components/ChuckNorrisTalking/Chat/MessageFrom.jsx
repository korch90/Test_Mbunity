 import s from "./MessageFrom.module.css"




const MessageFrom=(props)=>{




    return(

<div className={s.message_From}>    

<div className={s.ava_btns_time}>
<div className={s.ava} > <div className={s.userPhotoName} > <img src={props?.userChat[0]?.url} alt="" /> </div></div>
<div className={s.time_and_btns} >  <p style={{fontSize:"8px"}} >{props.el.time } </p> <div  className={s.btns} ><button  onClick={()=>props.handleEditMessage(props.el,props.index)} className={s.btnEdit}>edit</button> 
<button onClick={()=>props.handleDeleteMessage(props.el,props.index)} className={s.btnDelete}>delete</button></div> </div>
</div>
<div className={s.txt}> <p style={{color:"black"}}>{props.el.text }</p></div>
  </div>

)
}
export default MessageFrom
