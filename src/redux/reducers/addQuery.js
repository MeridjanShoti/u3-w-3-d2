import { ADD_QUERY } from "../actions";

const initialState = {
  content: "",
};
const addQuery = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUERY:
      return { ...state, content: action.payload };
    default:
      return state;
  }
};
export default addQuery;
