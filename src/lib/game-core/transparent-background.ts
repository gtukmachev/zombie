import {GameObject} from './game-object';

export class TransparentBackground extends GameObject {

  constructor () {
    super(0, 0);
  }


  draw (): void {
    // Draw background: optimized 'magic' hack-version
    this.game.canvas.width = this.game.canvas.width;
  }

  beforeTurn (): void {
  }

  turn (): void {
  }

  afterTurn (): void {
  }
}
