import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onUpdate, 1000));

function onUpdate(data) {
  localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
  console.log(data);
}

const playerTime = localStorage.getItem(LOCALSTORAGE_KEY);

if (playerTime === null) {
  player.setCurrentTime(0);
} else {
  player.setCurrentTime(playerTime);
}
