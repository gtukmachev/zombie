import {GameObject} from './game-object';

export class CameraFrameObject extends GameObject {

  public color: string | CanvasGradient | CanvasPattern;

  constructor (color: string | CanvasGradient | CanvasPattern) {
    super(0, 0);
    this.color = color;
  }


  draw (): void {
    const ctx = this.game.ctx;
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 1;
    ctx.strokeRect( this.game.cameraPos.x - this.game.cameraActorFrame.x, this.game.cameraPos.y - this.game.cameraActorFrame.y,
      this.game.cameraActorFrame.x * 2, this.game.cameraActorFrame.y * 2,
    );

  }

  beforeTurn (): void {
  }

  turn (): void {
  }

  afterTurn (): void {
  }
}
