import ActionTypes from "./ActionTypes";
import IndicoAPI from "../api/indico";

const analyzeResponseSuccess = (dispatch, text) => {
  return response => {
    dispatch({
      type: ActionTypes.INDICO_ANALYZE_SUCCESS,
      payload: { results: response.data, text }
    });
  };
};

const analyzeResponseError = dispatch => {
  return response => {
    dispatch({
      type: ActionTypes.INDICO_ANALYZE_ERROR
    });
  };
};

export const analyzeResponse = text => {
  return dispatch => {
    dispatch({ type: ActionTypes.INDICO_ANALYZE_REQUEST });
    IndicoAPI.analyze(text)
      .then(analyzeResponseSuccess(dispatch, text))
      .catch(analyzeResponseError(dispatch));
  };
};
