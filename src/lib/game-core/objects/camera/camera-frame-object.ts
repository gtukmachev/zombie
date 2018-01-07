import {SimpleGameObj} from '../simple-draw-game-obj';

export class CameraFrameObject extends SimpleGameObj {

  public color: string | CanvasGradient | CanvasPattern;

  constructor(color: string | CanvasGradient | CanvasPattern) {
    super(0,0);
    this.color = color;
  }


  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 1;
    ctx.strokeRect(
      this.game.cameraPos.x - this.game.cameraActorFrame.x,
      this.game.cameraPos.y - this.game.cameraActorFrame.y,

      this.game.cameraActorFrame.x * 2,
      this.game.cameraActorFrame.y * 2,
    );
  }
}
