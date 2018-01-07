import 'rxjs/add/operator/filter';
import {Gun} from '../guns/gun';
import {MachineGun} from '../guns/machine-gun';
import {LiveGameObj} from '../../../lib/game-core/model/objects/live-game-obj';
import {ManagebleMoverAWSD} from '../../../lib/game-core/model/movers/manageble-mover-AWSD';
import {SuitsDrawer, SuitsFrameDescription} from '../../../lib/game-core/model/drawers/suits-drawer';
import {AngleType} from '../../../lib/game-core/model/objects/game-obj';
import {Game2} from '../../../lib/game-core/game-2';
import {MouseEventType} from '../../../lib/game-core/events/game-mouse-event';
import {Subscription} from 'rxjs/Subscription';

export class Actor extends LiveGameObj {

//  static s2 = 1 / Math.sqrt(2);
  private mouseSubscription: Subscription;

  public gun: Gun;

  // 'suit' property - delegates directly to SuitsDrawer.currentSuitNumber property.
  get suit(): number { return (this.drawer as SuitsDrawer).currentSuitNumber; }
  set suit(value: number) { (this.drawer as SuitsDrawer).currentSuitNumber = value; }

//  private speed_diagonal: number;

//  private mouseSubscription: Subscription;
//  private keyboardSubscription: Subscription;



  constructor(x: number, y: number) {
    super(x, y, new ActorSuitsDrawer(), new ManagebleMoverAWSD(), 500, 30);
    this.suit = 1;
    this.r = 32;
    this.sValMax = 4;
    this.angleType = AngleType.ON_EYE;

    //this.speed_diagonal = this.speed * Actor.s2;
    //this.speedVector = new Vector(0,0);

    this.gun = new MachineGun();
  }


  public onAddIntoGame(game: Game2): void {
    super.onAddIntoGame(game);

    this.mouseSubscription = this.game.mouse.subscribe(e => {
           if (e.type === MouseEventType.DOWN) { this.gun.onMouseDown(e.event); }
      else if (e.type === MouseEventType.UP)   { this.gun.onMouseUp(e.event); }
    });

/*
    this.keyboardSubscription = this.game.keyboard.subscribe(e => {
      if (e.type === KeyboardEventType.DOWN) { this.onKeyDown(e.event); }
      else if (e.type === KeyboardEventType.UP)   { this.onKeyUp(e.event); }
    });
*/

  }


  public onRemovingFromGame(): void {
    super.onRemovingFromGame();

    if (this.mouseSubscription) this.mouseSubscription.unsubscribe();
    //this.keyboardSubscription.unsubscribe();
  }

  public drawHealth(ctx: CanvasRenderingContext2D): void {
    const hx = 550;
    const hy = 15;
    const h_lineWidth = 7;
    const h_length = 700;

    ctx.lineCap = 'round';
    ctx.lineWidth = h_lineWidth;
    let hl = new Path2D();
    hl.moveTo(hx,hy);
    hl.lineTo(hx+h_length, hy);

    if (this.helth === this.maxHelth) {
      ctx.strokeStyle = '#ff7716';
      ctx.stroke(hl);
    } else {
      ctx.strokeStyle = '#a9a9a9';
      ctx.stroke(hl);

      if (this.helth > 0) {
        if (this.helth > 0) {
          let dl = new Path2D();
          dl.moveTo(hx, hy);
          dl.lineTo(hx + h_length * (this.helth / this.maxHelth) , hy);
          ctx.strokeStyle = '#ff7716';
          ctx.stroke(dl);
        }

      }
    }


  }

  beforeTurn(): void {
    super.beforeTurn();
    this.gun.finishReloading();

    this.setEyeDirectionOn_xy(this.game.mousePos.x, this.game.mousePos.y);

    let bullet = this.gun.shot(this);
    if (bullet) { this.game.add(bullet); }

  }

  afterTurn(): void {
    if (this.helth <= 0) { this.game.loose(); }
    this.scale = this.getDeathStageK();
  }

}

//todo: move into ImagesSuitsDrawer
class ActorSuitsDrawer extends SuitsDrawer {

  drawSuit(suitNumber: number): HTMLImageElement | HTMLCanvasElement | ImageBitmap | SuitsFrameDescription {
    const sz = this.gObj.r * 2;
    const canvas = this.createCanvas(sz, sz);
    const ctx = canvas.getContext('2d');
    const image: HTMLImageElement = document.getElementById("ai"+this.currentSuitNumber) as HTMLImageElement;
    if ( this.currentSuitNumber === 2 || this.currentSuitNumber === 5 ) {
      ctx.setTransform(-1, 0, 0, 1, sz, 0); // inversion: left <--> right
    }
    ctx.drawImage(image, 0,0, sz, sz);
    return canvas;
  }
}
