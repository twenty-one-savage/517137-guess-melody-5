
import {getRandomInteger} from "../utils/common";
import {AvatarProperties} from "../const";

const AVATAR_URL = `https://www.stevensegallery.com/${AvatarProperties.height}`;

export default [
  {
    type: `genre`,
    genre: `bosanova`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `classic`,
    }, {
      src: `https://ab-pr-fa.audio.tidal.com/4112782f049efe90ba58509afee5910e_12.mp3?token=1603008397~MTk3MTQ3MDhkZGY3NmY2YjY2OGRlY2Q5Yzg2YzA3OWRkZWZlNGNlMQ==`,
      genre: `hip-hop`,
    }, {
      src: `https://ab-pr-fa.audio.tidal.com/80513836/5404c30a4d64f8a0abeec33396df7602_12.mp3?token=1603008888~ZWM3NTA4NmJjNmNlYjFjN2ZlZjM2ODc0OTgxNWIwMTgwNDIwMDgxMA==`,
      genre: `bosanova`,
    }, {
      src: `https://ab-pr-fa.audio.tidal.com/e296d96de21ba94011ba9a3fa124300e_12.mp3?token=1603008735~MjQ4NTI1YTMxOTQyZDVhZWNmOGQ2OTkzMzgyNDgxNDVhNWUxODFjMA==`,
      genre: `hip-hop`,
    }]
  }, {
    type: `artist`,
    song: {
      artist: `Sonny Digital`,
      src: `https://ab-pr-fa.audio.tidal.com/c12f9904245cd98be50d6afa4c6e6ca8_12.mp3?token=1603009136~MjQzOGM0OTgwYWMwYWI3OWE0YjA0YTA2Yjg5NTliMDM2MTM1YmIwNw==`,
    },
    answers: [{
      picture: `${AVATAR_URL}/${getRandomInteger(100, AvatarProperties.width)}`,
      artist: `Pi'erre Bourne`,
    }, {
      picture: `${AVATAR_URL}/${getRandomInteger(100, AvatarProperties.width)}`,
      artist: `21 Savage`,
    }, {
      picture: `${AVATAR_URL}/${getRandomInteger(100, AvatarProperties.width)}`,
      artist: `Sonny Digital`,
    }],
  }
];
