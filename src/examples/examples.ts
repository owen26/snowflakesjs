import { SnowScene } from '../index';

const btnStart = document.querySelector<HTMLButtonElement>('#start')!;
const btnStop = document.querySelector<HTMLButtonElement>('#stop')!;
const btnToggle = document.querySelector<HTMLButtonElement>('#toggle')!;

const scene = new SnowScene('body', {
  volumn: 100, // density of the snow
  color: '#ffffff', // color of the snowflakes
});

scene.play();

btnStart.onclick = () => {
  scene.play();
};

btnStop.onclick = () => {
  scene.pause();
};

btnToggle.onclick = () => {
  scene.toggle();
};

// for debugging purpose
(window as any).sss = scene;
