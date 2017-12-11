import {GameObject} from './game-object';

export class SimpleBackGround extends GameObject {

  public color: string | CanvasGradient | CanvasPattern;

  constructor (color: string | CanvasGradient | CanvasPattern) {
    super(0, 0);
    this.color = color;
  }


  draw (): void {
    // Draw background (which also effectively clears any previous drawing)
    this.game.ctx.fillStyle = this.color;
    this.game.ctx.fillRect(0, 0, this.game.worldSize.x, this.game.worldSize.y);
  }

  beforeTurn (): void {
  }

  turn (): void {
  }

  afterTurn (): void {
  }
}
