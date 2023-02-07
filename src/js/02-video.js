import Player from '@vimeo/player';
import throttle  from 'lodash.throttle';

const KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

pageReload ();

player.on('timeupdate', throttle(function (time) {
  localStorage.setItem(KEY, time.seconds);
}, 1000)
);

function pageReload() {
  const timeLocalStorage = localStorage.getItem(KEY);

  if (timeLocalStorage) {
    player.setCurrentTime(timeLocalStorage)
  }
}
