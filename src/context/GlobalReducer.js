const GlobalReducer = (state , action) => {
    switch(action.type){
     case "GET_DATA":
        return{
            ...state,
            quote: action.payload
        }


        default:
            return state
    }
}

export default GlobalReducer