import * as Actions from "../constants/index";
export const updatedSearch = (search) => {
  return {
    type: Actions.SETSEARCH,
    search,
  };
};
export const updateInput = (input) => {
  return {
    type: Actions.SETINPUT,
    input,
  };
};
