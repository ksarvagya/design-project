import ActionTypes from "./ActionTypes";

export const incrementCurrentQuestion = () => {
  return {
    type: ActionTypes.INCREMENT_CURRENT_QUESTION
  };
};
