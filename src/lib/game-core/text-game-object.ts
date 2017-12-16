import {GameObject} from './game-object';

export class TextGameObject extends GameObject {

  public color: string | CanvasGradient | CanvasPattern;
  public fill: string | CanvasGradient | CanvasPattern;
  public text: string;
  public font: string;


  constructor (x: number, y: number, text: string, size: number, font:string, color: string | CanvasGradient | CanvasPattern, fill: string | CanvasGradient | CanvasPattern) {
    super(x, y);
    this.color = color;
    this.text = text;
    this.font = font;
    this.fill = fill;
    this.r = size;
  }


  draw (): void {
    let ctx = this.game.ctx;

    ctx.lineWidth = 2;
    ctx.strokeStyle = this.color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `${this.r}px ${this.font}`;
    ctx.fillStyle = this.fill;

    this.game.ctx.fillText(this.text,this.p.x, this.p.y);
    this.game.ctx.strokeText(this.text,this.p.x, this.p.y);
  }

  beforeTurn (): void {
  }

  turn (): void {
  }

  afterTurn (): void {
  }
}
