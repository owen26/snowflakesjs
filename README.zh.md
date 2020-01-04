# SnowflakesJS 落雪效果

一个很酷的网页落雪效果，完全支持各种前端框架环境以及纯浏览器加载。

完全支持 TypeScript。

[English](README.md)

## 演示

[GitHub Pages](https://owen26.github.io/snowflakesjs/)

[Stackblitz](https://stackblitz.com/edit/snowflakesjs-demo)

## 安装

```
npm install snowflakesjs

// 或者使用 yarn

yarn add snowflakesjs
```

## 使用

### 基础使用

```js
// 引入包文件
import { SnowScene } from 'snowflakesjs';

// 添加落雪效果到网页body元素（通畅这意味着全屏模式，除非你的css样式不合理导致body没有覆盖全屏）
const scene = new SnowScene();

// 开始落雪
scene.play();

// 停止
scene.pause();

// 切换落雪效果 开始/停止
scene.toggle();
```

### 参数解释

```js
// 引入包文件
import { SnowScene } from 'snowflakesjs';

// 添加落雪效果至特定的DOM容器，并更改落雪行为参数
const scene = new SnowScene('#mycontainerid', {
  color: '#bfeaff', // 雪花颜色 (默认 #ffffff)
  volumn: 1000, // 雪花数量/强度 (默认 300)
});

// 开始落雪
scene.play();
```

### 直接引入浏览器

常用的 CDN 位置如下，此外你也可以手动下载此 js 文件并包含到你的项目中去。

- [cdn.jsdelivr.net](https://cdn.jsdelivr.net/npm/snowflakesjs/dist/snowflakes.bundle.min.js)（国内友好）
- [unpkg.com](https://unpkg.com/snowflakesjs/dist/snowflakes.bundle.min.js)

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
