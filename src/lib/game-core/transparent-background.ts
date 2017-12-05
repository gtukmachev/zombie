import {GameObject} from './game-object';
import {Game} from './game';

export class TransparentBackground extends GameObject {

  public isDrawable = true;
  public color: string | CanvasGradient | CanvasPattern;

  constructor (game: Game) {
    super(game, 0, 0);
  }


  draw (): void {
    // Draw background: optimized 'magic' hack-version
    this.game.canvas.width = this.game.canvas.width;
    // this.game.ctx.translate(100,100);
    if (!this.game.cameraPos.equals( this.game.cameraInitialPos )){
      this.game.ctx.translate( this.game.cameraInitialPos.x - this.game.cameraPos.x, this.game.cameraInitialPos.y - this.game.cameraPos.y );
    }

  }

  beforeTurn (): void {
  }

  turn (): void {
  }

  afterTurn (): void {
  }
}
