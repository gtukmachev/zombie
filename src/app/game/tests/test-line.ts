import {MouseEventType} from '../../../lib/game-core/events/game-mouse-event';
import 'rxjs/add/operator/filter';
import {SimpleGameObj} from '../../../lib/game-core/objects/simple-draw-game-obj';
import {Game2} from '../../../lib/game-core/game-2';
import {Subscription} from 'rxjs/Subscription';

export class TestLine extends SimpleGameObj {

  needSetDirection = false;
  rotationOn = false;
  mouseSubscription: Subscription;


  constructor(x: number, y: number) {
    super(x, y);
    this.sd.setAngle(Math.PI / 6 * 5);
  }

  public draw(ctx: CanvasRenderingContext2D): void {


    let xBegin = 0;
    let yBegin = this.p.fLine(this.sd, xBegin);

    let xEnd = this.game.worldSize.x;
    let yEnd = this.p.fLine(this.sd, xEnd);


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
    let m = this.p.getOffsetVector(this.sd, 150);
    ctx.moveTo(m.x, m.y);
    ctx.lineTo(m.x, m.y);
    ctx.stroke();

    ctx.beginPath();

    let a = this.sd.angle();
    if (a > 0) { ctx.arc(this.p.x, this.p.y, 150, 0, a );}
    else       { ctx.arc(this.p.x, this.p.y, 150, a, 0 );}


    ctx.strokeStyle = '#b8ffb8';
    ctx.lineWidth = 3;
    ctx.stroke();

  }


  public onAddIntoGame(game: Game2): void {
    super.onAddIntoGame(game);
    this.mouseSubscription = game.mouse
      .filter(e => e.type === MouseEventType.DOWN)
      .subscribe(e => this.onMouseDown(e.event));
  }


  public onRemovingFromGame(): void {
    if (this.mouseSubscription) this.mouseSubscription.unsubscribe();
    super.onRemovingFromGame();
  }

  public move(): void {
    if (this.needSetDirection) this.setDirectionOn_xy(this.game.mousePos.x, this.game.mousePos.y);
    if (this.rotationOn) this.sd.rotateOn(Math.PI / 900);
  }


  afterTurn(): void {
  }

  public onMouseDown(event: MouseEvent) {
    if (event.which === 1) this.needSetDirection = true;
    if (event.which === 2) { this.rotationOn = !this.rotationOn; }
  }

}
