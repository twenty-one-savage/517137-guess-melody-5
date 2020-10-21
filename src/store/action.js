export const ActionType = {
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  INCREMENT_STEP: `INCREMENT_STEP`,
  RESET_GAME: `RESET_GAME`
};

export const ActionCreator = {
  incrementMistakes: () => {
    return {
      type: ActionType.INCREMENT_MISTAKES,
      payload: 1
    };
  },
  incrementStep: () => {
    return {
      type: ActionType.INCREMENT_STEP,
      payload: 1
    };
  },
  resetGame: () => {
    return {
      type: ActionType.RESET_GAME
    };
  }
};
