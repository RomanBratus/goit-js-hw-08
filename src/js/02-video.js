import Player from '@vimeo/player';
import { throttle } from 'lodash/function';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// console.log(player)
//
// player.on('play', function () {
//   console.log('played the video!')
// })
//
// player.getVideoTitle().then(function (title) {
//   console.log('title', title)
// })

const KEY = 'videoplayer-curent-time';

videoTimer();

const setPlayer = thottle (function(iframe){
  localStorage.setPlayer(KEY,`${iframe.seconds}`);
},1000);

player.on('timeupdate',setPlayer);

function videoTimer(){
  const timeStorage = localStorage.getItem(KEY);
  if (timeStorage){
    pla.setCurrentTime(localStorage.getItem(KEY));
  }
};