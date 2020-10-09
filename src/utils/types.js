// import PropTypes from "prop-types";
// import {GameType} from "../const";
//
// const onAnswer = PropTypes.func.isRequired;
//
// const questionsTypes = PropTypes.array.isRequired;
//
// const welcomeTypes = PropTypes.shape({
//   errorsCount: PropTypes.number.isRequired,
//   onPlayButtonClick: PropTypes.func.isRequired
// });
//
// const gameGenresTypes = PropTypes.shape({
//   question: PropTypes.shape({
//     answers: PropTypes.arrayOf(PropTypes.exact({
//       src: PropTypes.string.isRequired,
//       genre: PropTypes.string.isRequired,
//     })).isRequired,
//     genre: PropTypes.string.isRequired,
//     type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
//   }).isRequired
// });
//
// const gameArtistTypes = PropTypes.shape({
//   question: PropTypes.shape({
//     answers: PropTypes.arrayOf(PropTypes.exact({
//       artist: PropTypes.string.isRequired,
//       picture: PropTypes.string.isRequired,
//     })).isRequired,
//     song: PropTypes.shape({
//       artist: PropTypes.string.isRequired,
//       src: PropTypes.string.isRequired,
//     }).isRequired,
//     type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
//   }).isRequired
// });
//
// export {
//   welcomeTypes,
//   gameGenresTypes,
//   gameArtistTypes,
//   questionsTypes,
//   onAnswer
// };
//
//
