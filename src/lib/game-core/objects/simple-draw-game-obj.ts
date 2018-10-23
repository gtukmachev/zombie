import {GameObj} from './game-obj';
import {Drawer} from '../drawers/drawer';
import {Mover} from '../movers/mover';

export class SimpleGameObj extends GameObj {

  constructor(x: number, y: number) {
    super(x, y, new SimpleGameObjDrawer(), new SimpleGameObjMover());
  }

  public draw(ctx: CanvasRenderingContext2D): void { };
  public move(): void { };


  // draw helper methods
  public fillCircle (ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, fillStyle: string | CanvasGradient | CanvasPattern) {
    ctx.beginPath();
    ctx.fillStyle = fillStyle;
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  public strokeCircle (ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, strokeStyle: string | CanvasGradient | CanvasPattern) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = strokeStyle;
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.stroke();
  }

  public fcCircle (ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, strokeStyle: string | CanvasGradient | CanvasPattern, fillStyle: string | CanvasGradient | CanvasPattern) {
    ctx.beginPath();
    ctx.fillStyle = fillStyle;
    ctx.strokeStyle = strokeStyle;

    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

}

class SimpleGameObjDrawer extends Drawer<SimpleGameObj> { draw(): void {
    this.gObj.draw(this.gObj.game.ctx);
}}

class SimpleGameObjMover extends Mover<SimpleGameObj> {  move(): void {
    this.gObj.move();
}}
