import * as Actions from "../constants/index";
const initialState = {
  search: [],
  input: "",
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SETSEARCH:
      return {
        ...state,
        search: [...action.search],
      };
    case Actions.SETINPUT:
      return {
        ...state,
        input: action.input,
      };
    default:
      return state;
  }
};
export default Reducer;
