export enum SnowflakePosition {
  TOP,
  BOTTOM,
  LEFT,
  RIGHT,
  ONSTAGE,
}

export class Snowflake {
  /** Snowflake colour */
  color = '#ffffff';
  /** snowflake recycle activated */
  active = true;
  pos = SnowflakePosition.TOP;

  private x!: number;
  private y!: number;
  private vx!: number;
  private vy!: number;
  private radius!: number;
  private alpha!: number;

  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;

    const ctx = canvas.getContext('2d');
    if (ctx) {
      this.ctx = ctx;
    } else {
      throw new Error(
        'Canvas 2D context not found, please check it is running in Browser environment.'
      );
    }

    this.allocate();
  }

  draw(): void {
    this.updatePosition();

    // freeze all frame render calculation if not active and not on stage
    if (!this.active && this.pos !== SnowflakePosition.ONSTAGE) {
      return;
    }

    if (
      this.pos === SnowflakePosition.LEFT ||
      this.pos === SnowflakePosition.RIGHT ||
      this.pos === SnowflakePosition.BOTTOM
    ) {
      this.allocate();
      return;
    }

    this.y += this.vy;
    this.x += this.vx;

    this.ctx.globalAlpha = this.alpha;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.ctx.closePath();
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  private updatePosition(): void {
    if (this.y < -this.radius) {
      this.pos = SnowflakePosition.TOP;
    } else if (this.y > this.canvas.height + this.radius) {
      this.pos = SnowflakePosition.BOTTOM;
    } else if (this.x < -this.radius) {
      this.pos = SnowflakePosition.LEFT;
    } else if (this.x > this.canvas.width + this.radius) {
      this.pos = SnowflakePosition.RIGHT;
    } else {
      this.pos = SnowflakePosition.ONSTAGE;
    }
  }

  private allocate(): void {
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * -this.canvas.height;

    this.vy = 1 + Math.random() * 3;
    this.vx = 0.5 - Math.random();

    this.radius = 1 + Math.random() * 2;
    this.alpha = 0.5 + Math.random() * 0.5;
  }
}
