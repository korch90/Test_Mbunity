import { ChatReducerTypes } from "../reducers/actionTypes";
import { useDispatch, useSelector } from "react-redux";
// import { loadData } from "../../api/apiCalls";



export const ActionChatReducer = {
 


    chatOnInit: (data) => ({
        type: ChatReducerTypes.GET_INFO,
        data
    }),
    pushMessage: (data) => ({
        type: ChatReducerTypes.PUSH_MESSAGE,
        data
    }),
}


export const pushMessage = (chatStore) => (dispatch) => {
//    const chatStore=useSelector(state=>state.CHAT_Reducer.chatStore)

    dispatch(ActionChatReducer.pushMessage(chatStore))

}


