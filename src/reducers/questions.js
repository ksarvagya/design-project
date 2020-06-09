import ActionTypes from "../actions/ActionTypes";

const initialState = {
  currentQuestion: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT_CURRENT_QUESTION:
      return {
        currentQuestion: state.currentQuestion + 1
      };
    case ActionTypes.RESET_ALL:
      return initialState;
    default:
      return state;
  }
};
