import { SnowScene } from '../snow-scene';

// add snowflakes to a container with extra customisations
const scene = new SnowScene('#demo1', {
  color: '#8ad3ff', // change snowflake color (default #ffffff)
  volumn: 1000, // change snow volumn to make it a storm (default 300)
});

// add snowflakes to the whole webpage
const fullScreenScene = new SnowScene();

const demo1 = document.querySelector<HTMLElement>('#demo1')!;

// register demo actions
const btnStart = document.getElementById('btnStart')!;
const btnPause = document.getElementById('btnPause')!;
const btnResize = document.getElementById('btnResize')!;

btnStart.onclick = () => scene.play();
btnPause.onclick = () => scene.pause();
btnResize.onclick = () => {
  demo1.style.width = demo1.style.width === '360px' ? '260px' : '360px';
  demo1.style.height = demo1.style.height === '300px' ? '200px' : '300px';
};

const btnStartFull = document.getElementById('btnStartFull')!;
const btnPauseFull = document.getElementById('btnPauseFull')!;

btnStartFull.onclick = () => fullScreenScene.play();
btnPauseFull.onclick = () => fullScreenScene.pause();
