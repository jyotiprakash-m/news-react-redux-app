import { combineReducers } from "redux";
export const ActionTypes = {
    SET_LAYOUT: "SET_LAYOUT"
};
const intialState = {
    layout: true
};
export const setLayout = (value) => {
    return {
        type: ActionTypes.SET_LAYOUT,
        payload: value,
    };
};
const layoutReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_LAYOUT:
            return { ...state, layout: payload };
        default:
            return state;
    }
};
const reducers = combineReducers({
    layout: layoutReducer
});
export default reducers;