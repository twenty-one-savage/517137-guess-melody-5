
import {getRandomInteger} from "../utils/common";
import {AvatarProperties} from "../const";

const AVATAR_URL = `https://www.stevensegallery.com/${AvatarProperties.height}`;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `blues`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `jazz`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
    }]
  }, {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [{
      picture: `${AVATAR_URL}/${getRandomInteger(100, AvatarProperties.width)}`,
      artist: `Pi'erre Bourne`,
    }, {
      picture: `${AVATAR_URL}/${getRandomInteger(100, AvatarProperties.width)}`,
      artist: `21 Savage`,
    }, {
      picture: `${AVATAR_URL}/${getRandomInteger(100, AvatarProperties.width)}`,
      artist: `Da Baby`,
    }],
  }
];
