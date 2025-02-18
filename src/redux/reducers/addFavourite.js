import { ADD_FAVOURITE } from "../actions";

const initialState = {
  favourites: [],
};
const addFavourite = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      return { ...state, favourites: [...state.favourites, action.payload] };
    default:
      return state;
  }
};
export default addFavourite;
