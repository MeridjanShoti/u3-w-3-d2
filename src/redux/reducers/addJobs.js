import { ADD_JOBS, RESET_JOBS } from "../actions";

const initialState = {
  content: [],
};
const addJobs = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOBS:
      return { content: action.payload };
    case RESET_JOBS:
      return { content: [] };
    default:
      return state;
  }
};
export default addJobs;
