import {GameObject} from './game-object';

export class TransparentBackground extends GameObject {

  constructor () {
    super(0, 0);
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
