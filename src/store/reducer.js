import {ActionType} from "./action";
import {extend} from "../utils/common";

const initialState = {
  mistakes: 0,
  step: 0,
  questions: null
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_MISTAKES:
      return extend(state, {
        mistakes: state.mistakes + action.payload
      });

    case ActionType.INCREMENT_STEP:
      return extend(state, {
        step: state.step + action.payload
      });

    case ActionType.RESET_GAME:
      return extend(state, {
        step: 0,
        mistakes: 0
      });
    default:
      return state;
  }
};

export {reducer};
