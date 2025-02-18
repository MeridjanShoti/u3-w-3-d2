const initialState = {
  jobs: [],
  query: "",
  favourites: [],
};
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_JOBS":
      return { ...state, jobs: action.payload };
    case "ADD_QUERY":
      return { ...state, query: action.payload };
    case "ADD_FAVOURITE":
      return { ...state, favourites: [...state.favourites, action.payload] };
    default:
      return state;
  }
};
export default mainReducer;
