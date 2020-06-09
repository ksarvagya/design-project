import ActionTypes from "./ActionTypes";

export const incrementCurrentSection = () => {
  return {
    type: ActionTypes.INCREMENT_CURRENT_SECTION
  };
};

export const reset = () => {
  return {
    type: ActionTypes.RESET_ALL
  };
};
