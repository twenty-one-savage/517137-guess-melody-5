import {Redirect} from "react-router-dom";
import {GameType} from "../../const";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import GenreQuestionScreen from "../genre-question-screen/genre-question-screen";
import Mistakes from "../mistakes/mistakes";
import artistQuestionProp from "../artist-question-screen/artist-question-screen.prop";
import genreQuestionProp from "../genre-question-screen/genre-question-screen.prop";

import withAudioPlayer from "../../hocs/with-audio-player/with-audio-player";

const GenreQuestionScreenWrapped = withAudioPlayer(GenreQuestionScreen);
const ArtistQuestionScreenWrapped = withAudioPlayer(ArtistQuestionScreen);

const GameScreen = (props) => {
  const {step, questions, onUserAnswer, mistakes, resetGame} = props;
  const question = questions[step];
  if (step >= questions.length || !question) {
    resetGame();

    return (
      <Redirect to="/"/>
    );
  }

  switch (question.type) {
    case GameType.ARTIST:
      return (
        <ArtistQuestionScreenWrapped
          question={question}
          onAnswer={onUserAnswer}
        >
          <Mistakes count={mistakes}/>
        </ArtistQuestionScreenWrapped>


      );
    case GameType.GENRE:
      return (
        <GenreQuestionScreenWrapped
          question={question}
          onAnswer={onUserAnswer}
        >
          <Mistakes count={mistakes} />
        </GenreQuestionScreenWrapped>
      );
  }

  return <Redirect to="/"/>;
};

GameScreen.propTypes = {
  step: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(
      PropTypes.oneOfType([artistQuestionProp, genreQuestionProp])
  ).isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
  mistakes: PropTypes.number.isRequired
};

export default GameScreen;
