

import {GameObject} from '../../../lib/game-core/game-object';
import {Game} from '../../../lib/game-core/game';

export class TestLine extends GameObject {

  isDrawable = true;
  rotationOn = false;


  constructor(game: Game, x: number, y: number) {
    super(game, x, y);
    //this.setDirectionOn_xy(x + 20, y + 10);
    this.setDirectionAngle(Math.PI / 6);
  }

  draw(): void {

    let x1 = this.p.x;
    let y1 = this.p.y;
    let dx = this.directionVector.x;
    let dy = this.directionVector.y;


    let xBegin = 0;
    let yBegin = this.fLine(xBegin, x1, y1, dx, dy);

    let xEnd = this.game.worldSize.x;
    let yEnd = this.fLine(xEnd, x1, y1, dx, dy);


    let ctx = this.game.ctx;

    ctx.lineWidth = 1;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#979797';

    ctx.beginPath();
    ctx.moveTo(xBegin, yBegin);
    ctx.lineTo(xEnd, yEnd);
    ctx.stroke();

    ctx.strokeStyle = '#fff17e';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(this.p.x, this.p.y);
    ctx.lineTo(this.p.x, this.p.y);
    ctx.stroke();

    ctx.strokeStyle = '#fff9f6';
    ctx.lineWidth = 5;
    ctx.beginPath();
    let m = this.p.move(this.directionVector, 150);
    ctx.moveTo(m.x, m.y);
    ctx.lineTo(m.x, m.y);
    ctx.stroke();

    ctx.beginPath();

    let a = this.directionVector.angle();
    if (a > 0) { ctx.arc(this.p.x, this.p.y, 150, 0, a );}
    else       { ctx.arc(this.p.x, this.p.y, 150, a, 0 );}


    ctx.strokeStyle = '#b8ffb8';
    ctx.lineWidth = 3;
    ctx.stroke();

  }

  fLine(x: number, x1: number, y1: number, dx: number, dy: number): number {
    let y = y1 + (dy/dx)*(x-x1);
    return y;
  }

  setDirectionAngle(angle: number) {
    this.directionVector.x = Math.cos(angle);
    this.directionVector.y = Math.sin(angle);
  }

  rotateOn(angleDelta: number) {
    let current_angle = this.directionVector.angle();
    let new_angle = current_angle + angleDelta;

    this.directionVector.x = Math.cos(new_angle);
    this.directionVector.y = Math.sin(new_angle);
  }

  beforeTurn(): void {
  }

  turn(): void {

    if (this.rotationOn) {this.rotateOn(Math.PI / 900);}


  }



  afterTurn(): void {
  }

  public onMouseDown(event: MouseEvent) {
    if (event.which === 1) { this.setDirectionOn_xy(this.game.mousePos.x, this.game.mousePos.y); }
    if (event.which === 2) { this.rotationOn = !this.rotationOn; }
  }

}
