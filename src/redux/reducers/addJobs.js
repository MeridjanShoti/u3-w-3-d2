import { ADD_JOBS } from "../actions";

const initialState = {
  jobs: [],
};
const addJobs = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOBS:
      return { ...state, jobs: action.payload };
    default:
      return state;
  }
};
export default addJobs;
