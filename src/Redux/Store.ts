import {combineReducers, createStore} from "redux";


export const rootReducer = combineReducers( {

})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>