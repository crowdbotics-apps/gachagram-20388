import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp21103146Reducer from '../features/SignUp21103146/redux/reducers'
import SignIn22103145Reducer from '../features/SignIn22103145/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp21103146: SignUp21103146Reducer,
SignIn22103145: SignIn22103145Reducer,

});