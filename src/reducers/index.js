import { combineReducers } from "redux";
import indico from "./indico";
import colors from "./colors";
import questions from "./questions";
import progress from "./progress";

export default combineReducers({
  indico,
  colors,
  questions,
  progress
});
