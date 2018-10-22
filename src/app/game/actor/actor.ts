import 'rxjs/add/operator/filter';
import {Gun} from '../guns/gun';
import {MachineGun} from '../guns/machine-gun';
import {LiveGameObj} from '../../../lib/game-core/objects/live-game-obj';
import {ManageableMoverAWED} from '../../../lib/game-core/movers/manageble-mover-AWSD';
import {SuitsDrawer} from '../../../lib/game-core/drawers/suits-drawer';
import {AngleType} from '../../../lib/game-core/objects/game-obj';
import {Game2} from '../../../lib/game-core/game-2';
import {MouseEventType} from '../../../lib/game-core/events/game-mouse-event';
import {Subscription} from 'rxjs/Subscription';
import {Pistol1} from '../guns/pistol-1';
import {KeyboardEventType} from '../../../lib/game-core/events/game-keyboard-event';
import {Pistol2} from '../guns/pistol-2';
import {Pistol3} from '../guns/pistol-3';
import {ImagesSuitsDrawer} from '../../../lib/game-core/drawers/images-suits-drawer';
import {TwoBlusterGun} from '../guns/two-bluster-gun';

export class Actor extends LiveGameObj {

//  static s2 = 1 / Math.sqrt(2);
  public guns: Array<Gun> = [
    new Pistol1(), new Pistol2(), new Pistol3(), new MachineGun(), new TwoBlusterGun()
  ];

  public gun: Gun;

  // 'suit' property - delegates directly to SuitsDrawer.currentSuitNumber property.
  get suit(): number { return (this.drawer as SuitsDrawer).currentSuitNumber; }
  set suit(value: number) { (this.drawer as SuitsDrawer).currentSuitNumber = value; }

//  private speed_diagonal: number;

  private mouseSubscription: Subscription;
  private keyboardSubscription: Subscription;


  constructor(x: number, y: number) {
    super(x, y, new ActorSuitsDrawer(), new ManageableMoverAWED(), 500, 30);
    this.suit = 1;
    this.r = 32;
    this.sValMax = 4;
    this.angleType = AngleType.ON_EYE;

    this.gun = this.guns[0];
  }


  public onAddIntoGame(game: Game2): void {
    super.onAddIntoGame(game);

    this.mouseSubscription = this.game.mouse.subscribe(e => {
           if (e.type === MouseEventType.DOWN) { this.gun.onMouseDown(e.event); }
      else if (e.type === MouseEventType.UP)   { this.gun.onMouseUp(e.event); }
    });


    this.keyboardSubscription = this.game.keyboard.subscribe(e => {
      if (e.type === KeyboardEventType.DOWN) {
        if (e.event.code >= 'Digit1' && e.event.code <= 'Digit9') {
          const i = Number( e.event.code.substr(5,1) ) - 1;

          if (this.guns[i]) { this.gun = this.guns[i]; }
        }
      }
    });


  }


  public onRemovingFromGame(): void {
    super.onRemovingFromGame();

    if (this.mouseSubscription) this.mouseSubscription.unsubscribe();
    if (this.keyboardSubscription) this.keyboardSubscription.unsubscribe();
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
class ActorSuitsDrawer extends ImagesSuitsDrawer {
  constructor() {
    super([
      "assets/actor1.png",
      "assets/actor2.png",
      "assets/actor3.png",
      "assets/actor4.png",
      "assets/actor5.png",
      "assets/actor6.png",
      "assets/actor7.png",
      "assets/actor8.png",
      "assets/actor9.png",
      "assets/actor10.png",
      "assets/actor11.png"
    ], true);
  }
}
