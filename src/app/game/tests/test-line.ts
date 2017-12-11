import {GameObject} from '../../../lib/game-core/game-object';
import {Game} from '../../../lib/game-core/game';
import {MouseEventType} from '../../../lib/game-core/events/game-mouse-event';
import 'rxjs/add/operator/filter';

export class TestLine extends GameObject {

  isDrawable = true;
  rotationOn = false;


  constructor(game: Game, x: number, y: number) {
    super(x, y);
    this.directionVector.setAngle(Math.PI / 6 * 5);
    game.mouse.filter(e => e.type === MouseEventType.DOWN).subscribe(e => this.onMouseDown(e.event));
  }

  draw(): void {


    let xBegin = 0;
    let yBegin = this.p.fLine(this.directionVector, xBegin);

    let xEnd = this.game.worldSize.x;
    let yEnd = this.p.fLine(this.directionVector, xEnd);


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
    let m = this.p.getOffsetVector(this.directionVector, 150);
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

  beforeTurn(): void {
  }

  turn(): void {

    if (this.rotationOn) {this.directionVector.rotateOn(Math.PI / 900);}


  }



  afterTurn(): void {
  }

  public onMouseDown(event: MouseEvent) {
    if (event.which === 1) { this.setDirectionOn_xy(this.game.mousePos.x, this.game.mousePos.y); }
    if (event.which === 2) { this.rotationOn = !this.rotationOn; }
  }

}
