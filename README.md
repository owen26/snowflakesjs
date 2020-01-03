# SnowflakesJS

Beautiful snowflakes falling down on your webpages.

Full TypeScript support.

[中文](README.zh.md)

## Demo

[Stackblitz](https://snowflakesjs-demo.stackblitz.io/)

## Installation

```
npm install snowflakesjs

// or yarn

yarn add snowflakesjs
```

## Usage

### Basic

```js
// import package in your code
import { SnowScene } from 'snowflakesjs';

// add snowflakes to the webpage's body element (usually this means fullscreen)
const scene = new SnowScene();

// start snow fall
scene.play();

// stop snow fall
scene.pause();

// toggle snow fall on/off
scene.toggle();
```

### Customisation

```js
// import package in your code
import { SnowScene } from 'snowflakesjs';

// add snowflakes to a container with extra customisations
const scene = new SnowScene('#mycontainerid', {
  color: '#bfeaff', // change snowflake color (default #ffffff)
  volumn: 1000, // change snow volumn to make it a storm (default 300)
});

// start the snow fall
scene.play();
```

### Directly reference in browser

```html
<script
  type="text/javascript"
  src="https://unpkg.com/snowflakesjs/dist/snowflakes.bundle.min.js"
></script>
<script>
  const scene = new SnowScene();
  scene.play();
</script>
```
