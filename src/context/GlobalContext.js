import { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";


const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {

    const initialState = {
        quote: null
    }
    const [state, dispatch] = useReducer(GlobalReducer, initialState)


   



    return (
        <GlobalContext.Provider value={{
            ...state,
            dispatch
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext