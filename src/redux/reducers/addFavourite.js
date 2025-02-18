import { ADD_FAVOURITE } from "../actions";

const initialState = {
  content: [],
};
const addFavourite = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      return { ...state, content: [...state.content, action.payload] };
    default:
      return state;
  }
};
export default addFavourite;
