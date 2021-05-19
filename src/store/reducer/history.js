import * as Actions from "../constants/index";
const initialState = {
  history: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.UPDATE:
      const updateHistory = state.history;
      updateHistory.unshift(action.item);
      return {
        history: [...updateHistory],
      };
    case Actions.DELETE:
      const updatedHistory = state.history;
      updatedHistory.splice(action.index, 1);
      return {
        history: [...updatedHistory],
      };
    case Actions.CLEAR:
      return {
        history: [],
      };
    default:
      return state;
  }
};
export default Reducer;
