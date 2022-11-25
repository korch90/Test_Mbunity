import { CvReducerTypes } from "../reducers/actionTypes";
// import { loadData } from "../../api/apiCalls";

export const CVReducerActions = {
    
    cvInfoOnInit: (data) => ({
        type: CvReducerTypes.CV_INFO_ON_INIT,
        data
    }),
    addCharacters: (data) => ({
        type: CvReducerTypes.ADD_CHARACTERS,
        data
    }),
    addInfo: (info) => ({
        type: CvReducerTypes.ADD_INFO,
        info
    }),
    setLoading: (loading) => ({
        type: CvReducerTypes.LOADING,
        loading
    }),
    setUsers: (users) => ({
        type: CvReducerTypes.SET_USERS,
        users
    })
}





