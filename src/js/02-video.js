import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
    'timeupdate',
    throttle(function (data) {
        localStorage.setItem('videoplayer-current-time', data.seconds);
    }, 600)
);

player
    .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
    .then(function () {})
    .catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
            default:
                // some other error occurred
                break;
        }
    });
