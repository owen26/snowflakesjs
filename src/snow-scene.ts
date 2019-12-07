import { Snowflake } from './snowflake';

export interface SnowSceneConfig {
  /** Snowflake colour */
  color: string;
  /** Volumn of snowflakes (increase it to make a strom) */
  volumn: number;
}

export class SnowScene {
  config: SnowSceneConfig;

  private container: Element;
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;

  private snowflakes: Snowflake[] = [];
  private active = false;
  private animationId = 0;

  constructor(containerSelector: string = 'body', config?: SnowSceneConfig) {
    const container = document.querySelector(containerSelector);

    if (container) {
      this.container = container;
    } else {
      throw new Error('can not find container by specified selector');
    }

    // apply config or fallback to default
    this.config = config || {
      color: '#ffffff',
      volumn: 300,
    };

    this.buildScene();
  }

  play(): void {
    this.active = true;
    this.snowflakes.forEach(s => (s.active = true));

    // check if there is still animation going on, if there is, do not intialize a new loop
    if (!this.animationId) {
      this.animationId = requestAnimationFrame(() => this.updateFrame());
    }
  }

  pause(): void {
    this.active = false;
    this.snowflakes.forEach(s => (s.active = false));
  }

  toggle(): void {
    if (this.active) {
      this.pause();
    } else {
      this.play();
    }
  }

  private buildScene(): void {
    const canvas = document.createElement('canvas');

    canvas.style.position = 'absolute';
    canvas.style.left = '0';
    canvas.style.top = '0';
    canvas.style.pointerEvents = 'none';
    canvas.width = this.container.clientWidth;
    canvas.height = this.container.clientHeight;

    this.container.appendChild(canvas);

    this.canvas = canvas;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      this.ctx = ctx;
    } else {
      throw new Error(
        'Canvas 2D context not found, please check it is running in Browser environment.'
      );
    }

    // generate snowflakes
    for (let i = 0; i < this.config.volumn; i++) {
      const flake = new Snowflake(this.canvas);

      flake.color = this.config.color;

      this.snowflakes.push(flake);
    }
  }

  private updateFrame(): void {
    // if (!this.active) {
    //   this.animationId = 0;
    //   return;
    // }

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.snowflakes.forEach(flake => {
      flake.draw();
    });

    this.animationId = requestAnimationFrame(() => this.updateFrame());
  }
}
