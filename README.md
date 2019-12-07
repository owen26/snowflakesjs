# xn-snowflakes

Add beautiful falling down snowflakes to any of the elements container (or fullscreen) in your webpage.

Complete JavaScript / TypeScript support.

## Demo

[Demo on stackblitz](https://stackblitz.com/edit/xn-snowflakes-demo?embed=1&file=index.ts)

## Installation

Add npm package

```
npm i xn-snowflakes
```

Import package into your code

```
// ES6 style
import { Snowflakes } from 'xn-snowflakes';

// commonjs style
const Snowflakes = require('xn-snowflakes');
```

## Usage

```
// add snowflakes to the whole webpage
const snowFull = new Snowflakes();

// start fullscreen snow fall
snowFull.start();

// stop fullscreen snow fall
snowFull.pause();


// add snowflakes to a container with extra customisations
const target = document.getElementById('mydiv');
const snow = new Snowflakes(target);

// change snowflake color (default #ffffff)
snow.color = '#bfeaff';

// change snow volumn to make it a storm (default 300)
snow.count = 1000;

// start the snow fall
snow.start();

// stop the snow fall
snow.pause();
```
