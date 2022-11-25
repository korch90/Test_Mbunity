import {TimeReducer} from "./actionTypes"

const initialState = {

    timeStore:{}
}


const CVReducer = (state= initialState, action) => { //Reducer function
    switch(action.type){
        case TimeReducer.GET_TIME:{
            return {
                ...state,
                timeStore: action.data
            }
        }
     
        default:
            return state
    }
}

export default CVReducer;