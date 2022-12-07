import {CvReducerTypes} from "./actionTypes"

const initialState = {

    cvInfo:{}
} 


const CVReducer = (state= initialState, action) => { //Reducer function
    switch(action.type){
        case CvReducerTypes.CV_INFO_ON_INIT:{
            return {
                ...state,
                cvInfo: action.data
            }
        }
     
        default:
            return state
    }
}

export default CVReducer;