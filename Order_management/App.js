import Router1 from "./router1";
import { Provider } from "react-redux";
import { createStore } from "@reduxjs/toolkit";
import { SafeAreaProvider } from "react-native-safe-area-context";

const initialState={
    order:"cart-arrow-down",
    count:[],
    list:[],
    sum:0
}
export const reducers=(state = initialState,action)=>{
    switch (action.type) {
        case 'IN':
            return{
                ...state,
                list:[...state.list,action.payload]
            }
            case 'DE':
                const newList = [...state.list];
                newList.splice(0, 1);
                return {
                    ...state,
                    list: newList,
                    sum:state.sum-action.payload
                }
            case 'AMOUNT':
                return{
                    ...state,
                    count : [...state.count,action.payload],
                    sum:state.sum+action.payload
                }
            case 'AMNT':
                return{
                    sum:state.sum-action.payload
                }
    }
    return state;
}
const store =createStore(reducers);

const App=()=>{
    return(
        <Provider store={store}>
        <SafeAreaProvider style={{marginTop:25}}>
        <Router1/>
        </SafeAreaProvider>
        </Provider>
    )
}
export default App;