import {createStore} from "redux";
import reducer from "../reducers"

const initialState = {
    username: "Smriti",
    totalAmount: 20000
};

const store = createStore(reducer, initialState);

export default store;

