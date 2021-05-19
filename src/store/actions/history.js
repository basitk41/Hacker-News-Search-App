import * as Actions from "../constants/index";
export const updatedHistory = (item) => {
  return {
    type: Actions.UPDATE,
    item,
  };
};
export const deleteHistory = (index) => {
  return {
    type: Actions.DELETE,
    index,
  };
};
export const clearHistory = () => {
  return {
    type: Actions.CLEAR,
  };
};
