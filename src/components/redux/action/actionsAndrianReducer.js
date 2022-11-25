import { AndrianReducerTypes } from "../reducers/actionTypes";
// import { loadData } from "../../api/apiCalls";

export const AndrianReducerActions = {
    
    addCharactersOnInit: (data) => ({
        type: AndrianReducerTypes.ADD_CHARACTERS_ON_INIT,
        data
    }),
    addCharacters: (data) => ({
        type: AndrianReducerTypes.ADD_CHARACTERS,
        data
    }),
    addInfo: (info) => ({
        type: AndrianReducerTypes.ADD_INFO,
        info
    }),
    setLoading: (loading) => ({
        type: AndrianReducerTypes.LOADING,
        loading
    }),
    setUsers: (users) => ({
        type: AndrianReducerTypes.SET_USERS,
        users
    })
}




// export const getCharactersOnInit = (str) => (dispatch) => {
//     dispatch(rickAndMortyActions.setLoading(true))
//             loadData()
//                 .then((data) => {
//                     // console.log(data.data)
//                     dispatch(rickAndMortyActions.addCharactersOnInit(data.data.results))
//                     dispatch(rickAndMortyActions.addInfo(data.data.info))
//                 })
//                 .catch((err) => console.log(err))
//                 .finally(() => dispatch(rickAndMortyActions.setLoading(false)))
// }

// export const getMoreCharacters = (next) => (dispatch) => {
//     dispatch(rickAndMortyActions.setLoading(true))
//     loadData(next)
//         .then((data) => {
//             dispatch(rickAndMortyActions.addCharacters(data.data.results))
//             dispatch(rickAndMortyActions.addInfo(data.data.info))
//         })
//         .catch((err) => console.log(err))
//         .finally(() => dispatch(rickAndMortyActions.setLoading(false)))
// }
