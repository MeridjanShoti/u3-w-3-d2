import { combineReducers, configureStore } from "@reduxjs/toolkit";
import addJobs from "../reducers/addJobs";
import addQuery from "../reducers/addQuery";
import addFavourite from "../reducers/addFavourite";
const rootReducer = combineReducers({
  jobs: addJobs,
  query: addQuery,
  favourites: addFavourite,
});
const store = configureStore({ reducer: rootReducer });
export default store;
