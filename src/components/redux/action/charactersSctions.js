// import { charactersReducerTypes } from "../reducers/actionTypes";
// import { getCharacter, getMoreCharacters } from "../../api/apiCalls";


// export const charactersActions = {
//     addCharacter: (data) => ({type: charactersReducerTypes.ADD_CHARACTERS, data}),
//     addMoreCharacters: (data) => ({type: charactersReducerTypes.ADD_MORE_CHARACTERS, data}),
//     setLoading: (loading) => ({type: charactersReducerTypes.SET_LOADING, loading}),
//     setError: (error) => ({type: charactersReducerTypes.SET_ERROR, error}),
// }

// export const getCharactersThunk = () => async (dispatch) => {
//     dispatch(charactersActions.setLoading(true))
//     await getCharacter()
//         .then((data) => {
//             dispatch({type: charactersReducerTypes.ADD_CHARACTERS, data: data.data})
//             dispatch(charactersActions.setError(null))
//         })
//         .catch((e) => {
//             dispatch(charactersActions.setError(e))
//         })
//         .finally(() => {
//             dispatch(charactersActions.setLoading(false))
//         })
// }


// export const getMoreCharactersThunk = (url) => async (dispatch) =>{
//     dispatch(charactersActions.setLoading(true))
//     await getMoreCharacters(url)
//         .then((data) => {
//             dispatch(charactersActions.addMoreCharacters(data.data))
//             dispatch(charactersActions.setError(null))
//         })
//         .catch((e) => {
//             dispatch(charactersActions.setError(e))
//         })
//         .finally(() => {
//             dispatch(charactersActions.setLoading(false))
//         })
// }