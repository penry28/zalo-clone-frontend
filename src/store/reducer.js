import config from "~/config";
import { SET_APP_SWITCH_TAB } from "./types";

const APP_STATE = {
    currentTabActive: config.constants.APP_SWITCH_TABS.TOP,
};

const initState = {
    ...APP_STATE,
};

function reducer(state, action) {
    switch (action.type) {
        case SET_APP_SWITCH_TAB:
            return {
                ...state,
                currentTabActive: action.values.tab,
            };
        default:
            return;
    }
}

export { initState };
export default reducer;
