import {AndrianReducerTypes} from "./actionTypes"

const initialState = {
    characters: [],
    error: null,
    loading: true,
    users:[],
    CvInfo:{}
}


const AndrianReducer = (state= initialState, action) => { //Reducer function
    switch(action.type){
        case AndrianReducerTypes.ADD_CHARACTERS_ON_INIT:{
            return {
                ...state,
                characters: action.data
            }
        }
        case AndrianReducerTypes.ADD_CHARACTERS:{
            return {
                ...state,
                characters: [
                    ...state.characters,
                    ...action.data
                    ]
            }
        }
        case AndrianReducerTypes.ADD_INFO:{
            return {
                ...state,
                info: action.info,
            }
        }
        case AndrianReducerTypes.LOADING:{
            return {
                ...state,
                loading: action.loading,
            }
        }
        case AndrianReducerTypes.SET_USERS:{
            return{
                ...state,
                users:action.users


            }
        }
        default:
            return state
    }
}

export default AndrianReducer;