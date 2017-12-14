import {GameObject} from './game-object';

export class TextGameObject extends GameObject {

  public color: string | CanvasGradient | CanvasPattern;
  public fill: string | CanvasGradient | CanvasPattern;
  public text: string;
  public font: string;


  constructor (text: string, size: number, font:string, color: string | CanvasGradient | CanvasPattern, fill: string | CanvasGradient | CanvasPattern) {
    super(0, 0);
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

    this.game.ctx.fillText(this.text,this.game.worldSize.x / 2, this.game.worldSize.y / 2 );
    this.game.ctx.strokeText(this.text,this.game.worldSize.x / 2, this.game.worldSize.y / 2 );
  }

  beforeTurn (): void {
  }

  turn (): void {
  }

  afterTurn (): void {
  }
}
