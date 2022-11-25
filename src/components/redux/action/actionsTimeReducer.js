import { TimeReducer } from "../reducers/actionTypes";
// import { loadData } from "../../api/apiCalls";

export const ActionTimeReducer = {
    
    timeOnInit: (data) => ({
        type: TimeReducer.GET_TIME,
        data
    })
}





