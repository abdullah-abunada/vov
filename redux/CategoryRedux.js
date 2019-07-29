import {createReducer, createActions} from 'reduxsauce'
import Immutable from 'seamless-immutable'

//Types and Action Creators
const {Types, Creators} = createActions({
    categoryRequest: [],
    categorySuccess: ['data'],
    categoryFailure: ['error'],

})

export const CategoryTypes = Types
export default Creators

//Initial State
export const INITIAL_STATE = Immutable({
    fetching: false,
    errorMessage: '',
    error: false,
    data: [],
 })

//Reducers
export const request = (state, action) => {
    return state.merge({fetching: true, error: false, errorMessage: ''})
}

export const success = (state, action) => {
    return state.merge({fetching: false, error: false, errorMessage: '', data: action.data})
}

export const failure = (state, action) => {
    return state.merge({fetching: false, error: true, errorMessage: action.error})
}

//Hookup Reducers To Types
export const reducer = createReducer(INITIAL_STATE, {
    [Types.CATEGORY_REQUEST]: request,
    [Types.CATEGORY_SUCCESS]: success,
    [Types.CATEGORY_FAILURE]: failure,
})