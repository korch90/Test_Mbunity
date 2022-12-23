import { ChatReducerTypes } from "../reducers/actionTypes";
import { useDispatch, useSelector } from "react-redux";
// import { loadData } from "../../api/apiCalls";



export const ActionChatReducer = {
  


    chatOnInit: (data) => ({
        type: ChatReducerTypes.GET_INFO,
        data
    }),
    pushMessage: (data) => (
        {
        type: ChatReducerTypes.PUSH_MESSAGE,
        data
    }),
    deleteMessage: (data) => ({
        type: ChatReducerTypes.DELETE_MESSAGE,
        data
    }),
    userWithChat:(data)=> ({
        type: ChatReducerTypes.USER_WITH_CHAT,
        data
    }),
  
}


export const _pushMessage = (chatStore) => (dispatch) => {
    dispatch(ActionChatReducer.pushMessage(chatStore))
    console.log("thunk")

}


