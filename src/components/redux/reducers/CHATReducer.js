import {ChatReducerTypes} from "./actionTypes"

const initialState = {
   
   chatStore:{
    chatWith:2,
    users:[

    {   name:"Andrian",
        sname:"fox",
        id:1,
        url:"https://upload.wikimedia.org/wikipedia/commons/3/30/Chuck_Norris_May_2015.jpg",
        messageWith:[
           
{
id:2,
message:[
  {
    url:"https://upload.wikimedia.org/wikipedia/commons/3/30/Chuck_Norris_May_2015.jpg",
        messageToFrom:"from",
        time:"22/11/2020",
        text:"helloAndrian",
    },
    {
        messageToFrom:"to",
        time:"22/11/2020",
        text:"helloChack"
    }
]


},
{
    id:3,
    message:[
      {
        url:"https://upload.wikimedia.org/wikipedia/commons/3/30/Chuck_Norris_May_2015.jpg",
            messageToFrom:"from",
            time:"22/11/2020",
            text:"helloAndrian",
        },
        {
            messageToFrom:"to",
            time:"22/11/2020",
            text:"helloChack"
        }
    ]
    
    
    }
        
        ]
        
    },

    {   name:"Kat",
    sname:"Ovivka",
    id:2,
    url:"https://upload.wikimedia.org/wikipedia/commons/3/30/Chuck_Norris_May_2015.jpg",
    messageWith:[
        
          
{
id:1,
message:[
{
    messageToFrom:"from",
    time:"22/11/2020",
    text:"helloChack",
    url:"https://upload.wikimedia.org/wikipedia/commons/3/30/Chuck_Norris_May_2015.jpg",

},
{
   
    messageToFrom:"to",
    time:"22/11/2020",
    text:"helloAndrian2",
   
}
]


}
    
    ]
    
},
{   name:"Oleg",
sname:"Nestle",
id:3,
url:"https://upload.wikimedia.org/wikipedia/commons/3/30/Chuck_Norris_May_2015.jpg",
messageWith:[
   
{
id:1,
message:[
{
url:"https://upload.wikimedia.org/wikipedia/commons/3/30/Chuck_Norris_May_2015.jpg",
messageToFrom:"from",
time:"22/11/2020",
text:"helloAndrianys",
},
{
messageToFrom:"to",
time:"22/11/2020",
text:"helloOleg"
}
]


}

]

},
   ]
}
   }



const CHAT_Reducer = (state= initialState, action) => { 

    switch(action.type){
        case ChatReducerTypes.GET_INFO: {
            return {
                ...state,
                chatStore: action.data
            }
        }
        case ChatReducerTypes.DELETE_MESSAGE: {
            return {
                ...state,
                chatStore: action.data
            }
        }
        case ChatReducerTypes.PUSH_MESSAGE:{
            return {
                ...state,
                chatStore:action.data
            
           
            }
        }
        case ChatReducerTypes.USER_WITH_CHAT:{
            return {
                ...state,
                
                chatStore :action.data
                
            
           
            }
        }
        
     
        default:
            return state
    }
}

export default CHAT_Reducer;
