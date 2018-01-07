import {TestLine} from './test-line';
import 'rxjs/add/operator/filter';
import {MouseEventType} from '../../../lib/game-core/events/game-mouse-event';
import {Subscription} from 'rxjs/Subscription';
import {SimpleGameObj} from '../../../lib/game-core/objects/simple-draw-game-obj';
import {Game2} from '../../../lib/game-core/game-2';

export class TestCircle extends SimpleGameObj {

  private line: TestLine;

  private mouseSubscription: Subscription;
  private needMove = false;

  constructor(line: TestLine, x: number, y: number) {
    super(x, y);
    this.r = 200;
    this.line = line;
  }

  public onAddIntoGame(game: Game2): void {
    super.onAddIntoGame(game);
    this.mouseSubscription = game
      .mouse
      .filter(e => e.type === MouseEventType.DOWN && e.event.which === 3)
      .subscribe(e => this.needMove = true);
  }

  public onRemovingFromGame(): void {
    super.onRemovingFromGame();
    this.mouseSubscription.unsubscribe();
  }


  public move(): void {
    if (this.needMove) this.p.setAs(this.game.mousePos);
  }

  public draw(ctx: CanvasRenderingContext2D): void {

    let res = this.p.thisCircleWirhLineCrossing(this.line.p, this.line.sd, this.r);

    ctx.lineWidth = 1;
    ctx.lineCap = 'round';
    this.strokeCircle(ctx, this.p.x, this.p.y, this.r, '#569bff');

    const color = '#ff4400';
    ctx.strokeStyle = color;
    for (let i = 0; i < res.length; i++) {
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(res[i].x, res[i].y);
      ctx.lineTo(res[i].x, res[i].y);
      ctx.stroke();
      this.strokeCircle(ctx, res[i].x, res[i].y, 10, color)
    }

  }

}
