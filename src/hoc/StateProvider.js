import {createContext, useReducer} from "react";
import {myPetReducer} from "../reducers/PetsReducers";

const StateContext=createContext(null);
const StateProvider=({children})=>{
    const reducers={
        petReducer:useReducer(myPetReducer,{cats:[],dogs:[]},(data)=>data)
    }
    return(
        <StateContext.Provider value={reducers}>
            {children}
        </StateContext.Provider>
    )
}
export {
    StateProvider,StateContext
}