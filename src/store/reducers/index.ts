import { combineReducers } from "redux";

import translate from "./translation/translation";
import auth from "./auth/auth";

const rootReducer = combineReducers({
    translate,
    auth,
});

export default rootReducer;