 import s from "./Chat.module.css"
import React, { Component, useEffect, useState }  from 'react';
import { useDispatch, useSelector } from "react-redux";
import {ActionChatReducer ,_pushMessage} from "../../redux/action/ActionChatReducer"
import shortid from 'shortid';
import MessageTo from "./MessageTo";
import MessageFrom from "./MessageFrom";






const Chat=()=>{
console.log("render")
const chatStore=useSelector(state=>state.CHAT_Reducer.chatStore)
const dispatch=useDispatch()
const [userWithChat,setUserWithChat]=useState(0)
const [editMode,setEditMode]=useState(false)
const pushMessageThunk=(chatStore)=>dispatch(_pushMessage(chatStore))
const [wichMessageEdit,setWichMessageEdit]=useState(0)
const [messageValue,setMessageValue]=useState("")


// useEffect(()=>{
//  dispatch(ActionChatReducer.chatOnInit(chatStore))
// },[])
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        'X-RapidAPI-Key': 'da8a8db973mshbdcb549202eaa4dp163864jsne9ad78339bc8',
        'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
    }
};

const time=new Date().getHours() + ":" + new Date().getMinutes()+ ":" + new Date().getSeconds()

const chuckNorisAnswer = () => {
    let newChatStore = JSON.parse(JSON.stringify(chatStore))
    console.log("old", newChatStore)
    fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options)
        .then(response => response.json())
        .then(response => {

                newChatStore ?.users ?.filter(e => e.id === 1)[0].messageWith.filter(e => e.id === newChatStore.chatWith)[0].message.push({
                        messageToFrom: "from",
                        text: response.value,
                        time: time

                    }

                )

                // console.log(newChatStore)
                pushMessageThunk(newChatStore)


            }

        )

        .catch(err => console.error(err));


}



const handleEditMessage = (el, index) => {
    setMessageValue(el.text)
    setWichMessageEdit(index)
    setEditMode(true)
}

 const handleDeleteMessage = (el, index) => {
    let newChatStore = {
        ...chatStore
    }
    newChatStore.users.filter(e => e.id === 1)[0].messageWith.filter(e => e.id === chatStore.chatWith)[0].message.splice([index], 1)
    dispatch(ActionChatReducer.deleteMessage(newChatStore))
}

const handleSendMessage = () => {

    if (editMode) {
        chatStore.users.filter(e => e.id === 1)[0].messageWith.filter(e => e.id === chatStore.chatWith)[0].message[wichMessageEdit].text = messageValue
        dispatch(ActionChatReducer.pushMessage(chatStore))
        setEditMode(false)
    } else {
        let newChatstore = chatStore
        newChatstore ?.users?.filter(e => e.id === 1)[0].messageWith.filter(e => e.id === chatStore.chatWith)[0].message.push({
            messageToFrom: "to",
            text: messageValue,
            time:time
        })

        pushMessageThunk(newChatstore)
        console.log("send")
        setTimeout(chuckNorisAnswer, 1000)


    }
    setMessageValue("")
}

const userChat=chatStore?.users?.filter( el=>el.id===1 )[0].messageWith .filter(el=>el.id===chatStore.chatWith)[0].message


    return(
<div className={s.wrapper}  >
<div className={s.head} >

<input type="text" className={s.findInput} />
</div>
<div className={s.mainSection} >

<ul >
{userChat?.map(
    (el,index)=> <li className={el.messageToFrom==="to"?s.to:s.from  } key={shortid.generate()} >
     <div className={s.message} >
     { el.messageToFrom==="to"?<MessageTo el={el}  chatStore={chatStore} index={index } handleDeleteMessage={handleDeleteMessage} handleEditMessage={handleEditMessage}/>
                               :<MessageFrom el={el}  chatStore={chatStore} index={index } userChat={userChat} handleDeleteMessage={handleDeleteMessage} handleEditMessage={handleEditMessage}/> }
  
      </div> </li>
    )}
</ul>


</div>
<div className={s.textAreaWithSendButton} >
<textarea type="text"  onChange={(e)=>{ setMessageValue(e.target.value)}} value={messageValue} className={s.textArea} />
<button className={s.btnSend} onClick={()=>handleSendMessage()} >send</button>

</div>
</div>
    )
}

export default Chat
