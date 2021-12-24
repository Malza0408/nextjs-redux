import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "../../node_modules/redux";
import counter from "./count";

const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default:
      console.log(action);
      const combineReducer = combineReducers({
        counter,
      });
      return combineReducer(state, action);
  }
};

export default rootReducer;

// export type RootState = ReturnType<typeof rootReducer>;
