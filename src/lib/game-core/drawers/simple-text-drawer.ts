import {Drawer} from './drawer';

export class SimpleTextDrawer extends Drawer<any> {

  public color: string | CanvasGradient | CanvasPattern;
  public fill: string | CanvasGradient | CanvasPattern;
  public text: string;
  public font: string;

  constructor(color: string | CanvasGradient | CanvasPattern, fill: string | CanvasGradient | CanvasPattern, text: string, font: string) {
    super();
    this.color = color;
    this.fill = fill;
    this.text = text;
    this.font = font;
  }

  draw(): void {

    const go = this.gObj;

    const ctx = go.game.ctx;

    ctx.lineWidth = 2;
    ctx.strokeStyle = this.color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `${go.r}px ${this.font}`;
    ctx.fillStyle = this.fill;

    ctx.fillText(this.text,go.p.x, go.p.y);
    ctx.strokeText(this.text,go.p.x, go.p.y);

  }
}
