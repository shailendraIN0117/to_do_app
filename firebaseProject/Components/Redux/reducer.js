import * as types from './actionTypes';

const intitalState = {
  taskArray: [],
};

const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case types.ADD_TASK:
      return {
        ...state,
        taskArray: [...state.taskArray, action.payload],
      };
    case types.DELETE_TASK:
      return {
        ...state,
        taskArray: [
          ...state.taskArray.filter((item, idx) => idx !== action.payload),
        ],
      };
    case types.EDIT_TASK:
      return {
        ...state,
        taskArray: [...state.taskArray, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
