import { combineReducers } from "redux";
import loginReducer from './loginSlice';
import registartionSlice from "./registartionSlice";
import cartSlice from "./cartSlice";

const rootReducer = combineReducers({
    login: loginReducer,
    registartion: registartionSlice,
    cart: cartSlice
});

export default rootReducer;