
import {getRandomInteger} from "../utils/common";
import {AvatarProperties} from "../const";

const AVATAR_URL = `https://www.stevensegallery.com/${AvatarProperties.HEIGHT}`;

export default [
  {
    type: `genre`,
    genre: `bosanova`,
    answers: [{
      src: `https://nadirovo.fun/assets/audio/scarface.mov`,
      genre: `disco`,
    }, {
      src: `https://nadirovo.fun/assets/audio/bankacc.mov`,
      genre: `hip-hop`,
    }, {
      src: `https://nadirovo.fun/assets/audio/takeitez.mov`,
      genre: `bosanova`,
    }, {
      src: `https://nadirovo.fun/assets/audio/ricflrdrp.mov`,
      genre: `hip-hop`,
    }]
  }, {
    type: `artist`,
    song: {
      artist: `Sonny Digital`,
      src: `https://nadirovo.fun/assets/audio/aftt.mov`,
    },
    answers: [{
      picture: `${AVATAR_URL}/${getRandomInteger(100, AvatarProperties.WIDTH)}`,
      artist: `Pi'erre Bourne`,
    }, {
      picture: `${AVATAR_URL}/${getRandomInteger(100, AvatarProperties.WIDTH)}`,
      artist: `21 Savage`,
    }, {
      picture: `${AVATAR_URL}/${getRandomInteger(100, AvatarProperties.WIDTH)}`,
      artist: `Sonny Digital`,
    }],
  }
];
