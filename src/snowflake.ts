enum Position {
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

  private x!: number;
  private y!: number;
  private vx!: number;
  private vy!: number;
  private radius!: number;
  private alpha!: number;

  private pos = Position.TOP;

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

    if (!this.active && this.pos !== Position.ONSTAGE) {
      // freeze all frame render calculation if not active and not on stage
      return;
    }

    if (this.pos === Position.LEFT || this.pos === Position.RIGHT || this.pos === Position.BOTTOM) {
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
      this.pos = Position.TOP;
    } else if (this.y > this.canvas.height + this.radius) {
      this.pos = Position.BOTTOM;
    } else if (this.x < -this.radius) {
      this.pos = Position.LEFT;
    } else if (this.x > this.canvas.width + this.radius) {
      this.pos = Position.RIGHT;
    } else {
      this.pos = Position.ONSTAGE;
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
