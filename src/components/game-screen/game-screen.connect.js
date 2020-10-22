import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import GameScreen from "./game-screen";

const mapStateToProps = (state) => ({
  step: state.step,
  mistakes: state.mistakes,
  questions: state.questions
});

const mapDispatchToProps = (dispatch) => ({
  resetGame() {
    dispatch(ActionCreator.resetGame());
  },
  onUserAnswer() {
    dispatch(ActionCreator.incrementStep());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
