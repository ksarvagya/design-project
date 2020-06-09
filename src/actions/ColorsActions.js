import ActionTypes from "./ActionTypes";

const SECTION_MAP = [
  ActionTypes.SET_WALLS_COLOR,
  ActionTypes.SET_RUG_COLOR,
  ActionTypes.SET_WINDOW_COLOR,
  ActionTypes.SET_DRESSER_COLOR,
  ActionTypes.SET_TABLE_COLOR,
  ActionTypes.SET_DECORATIONS_COLOR,
  ActionTypes.SET_BED_COLOR
];

export const setColors = (index, baseColor) => {
  return {
    type: SECTION_MAP[index],
    payload: {
      baseColor
    }
  };
};
