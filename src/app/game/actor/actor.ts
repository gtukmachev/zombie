import {AngleType, GameObject} from '../../../lib/game-core/game-object';
import 'rxjs/add/operator/filter';
import {Gun} from '../guns/gun';
import {MachineGun} from '../guns/machine-gun';
import {MouseEventType} from '../../../lib/game-core/events/game-mouse-event';
import {KeyboardEventType} from '../../../lib/game-core/events/game-keyboard-event';
import {Game} from '../../../lib/game-core/game';
import {Subscription} from 'rxjs/Subscription';
import {Pos} from '../../../lib/game-core/position';
import {CachedFilmGameObject, FilmFrameDescription} from '../../../lib/game-core/cached-film-game-object';

export class Actor extends CachedFilmGameObject<ActorFrameDetails> {
  get m_up(): boolean {
    return this._m_up;
  }

  get m_down(): boolean {
    return this._m_down;
  }

  get m_right(): boolean {
    return this._m_right;
  }

  get m_left(): boolean {
    return this._m_left;
  }

  static s2 = 1 / Math.sqrt(2);

  r = 16;

  public angleType: AngleType = AngleType.ON_EYE;

  public gun: Gun;

  private _m_up = false;
  private _m_down = false;
  private _m_right = false;
  private _m_left = false;

  private speed_diagonal: number;

  private mouseSubscription: Subscription;
  private keyboardSubscription: Subscription;


  constructor(x: number, y: number) {
    super(x, y);
    this.speed = 4;
    this.speed_diagonal = this.speed * Actor.s2;
    this.speedVector = new Pos(0,0);

    this.gun = new MachineGun();

    this.withHelth(500, 30);
  }


  public onAddIntoGame(game: Game): void {
    super.onAddIntoGame(game);

    this.mouseSubscription = this.game.mouse.subscribe(e => {
      if (e.type === MouseEventType.DOWN) { this.onMouseDown(e.event); }
      else if (e.type === MouseEventType.UP)   { this.onMouseUp(e.event); }
    });

    this.keyboardSubscription = this.game.keyboard.subscribe(e => {
      if (e.type === KeyboardEventType.DOWN) { this.onKeyDown(e.event); }
      else if (e.type === KeyboardEventType.UP)   { this.onKeyUp(e.event); }
    });

  }


  public onRemovingFromGame(): void {
    super.onRemovingFromGame();

    this.mouseSubscription.unsubscribe();
    this.keyboardSubscription.unsubscribe();
  }


  getCurrentFilmFrameDescription(): FilmFrameDescription<ActorFrameDetails> {
    const state = new ActorFrameDetails(
      this.helth, this.maxHelth
    );

    const center = Math.floor(this.r * 2.5 );
    const sz = center * 2;

    return new FilmFrameDescription<ActorFrameDetails>(state.getKey(),
      new Pos(sz, sz),
      new Pos(center, center),
      state
    );
  }

  drawFrame(frameCtx: CanvasRenderingContext2D, frameDescr: FilmFrameDescription<ActorFrameDetails>) {
    let strokeStyle = '#65b9b3';
    let fillStyle = '#6a8dff';

    const subr = this.r - 3;
    let l = frameDescr.center.x;

    let ctx = frameCtx;
    let path = new Path2D();
    path.moveTo(frameDescr.center.x, frameDescr.center.y);
    path.lineTo(frameDescr.center.x + l, frameDescr.center.y );
    ctx.lineWidth = frameDescr.details.healthWidth > 0 ? frameDescr.details.healthWidth : 0.5;

    ctx.strokeStyle = strokeStyle;
    ctx.stroke(path);

    ctx.beginPath();
    ctx.fillStyle = fillStyle;
    ctx.arc(frameDescr.center.x, frameDescr.center.y, subr, 0, GameObject.PIx2);
    ctx.fill();
    ctx.stroke();

    //ctx.strokeRect(0,0, frameDescr.size.x, frameDescr.size.y)
  }

  public drawHelth(ctx: CanvasRenderingContext2D): void {
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
    this.gun.finishReloading();
  }

  turn(): void {
    this.moveForwardSafe();
    this.setEyeDirectionOn_xy(this.game.mousePos.x, this.game.mousePos.y);

    let bullet = this.gun.shot(this);
    if (bullet) { this.game.add(bullet); }

  }

  afterTurn(): void {
    if (this.helth <= 0) { this.game.loose(); }
    this.scale = this.getDeathStageK();
  }

  private way(xd, yd, xs, ys) {
    this.directionVector.x = xd; this.directionVector.y = yd;
    this.speedVector.x     = xs; this.speedVector.y = ys;
  }

  private calcAngle() {
    let o = 0;

    let l = 1;
    let p = Actor.s2;

    let s = this.speed;
    let d = this.speed_diagonal;

    if      (  this._m_up && !this._m_down && !this._m_right && !this._m_left) { this.way(  o, -l,  o, -s); }
    else if (  this._m_up && !this._m_down &&  this._m_right && !this._m_left) { this.way(  p, -p,  d, -d); }
    else if ( !this._m_up && !this._m_down &&  this._m_right && !this._m_left) { this.way(  l,  o,  s,  o); }
    else if ( !this._m_up &&  this._m_down &&  this._m_right && !this._m_left) { this.way(  p,  p,  d,  d); }
    else if ( !this._m_up &&  this._m_down && !this._m_right && !this._m_left) { this.way(  o,  l,  o,  s); }
    else if ( !this._m_up &&  this._m_down && !this._m_right &&  this._m_left) { this.way( -p,  p, -d,  d); }
    else if ( !this._m_up && !this._m_down && !this._m_right &&  this._m_left) { this.way( -l,  o, -s,  o); }
    else if (  this._m_up && !this._m_down && !this._m_right &&  this._m_left) { this.way( -p, -p, -d, -d); }
    else                                                                       { this.way(  o,  o,  o,  o); }

  }

  set m_up(value: boolean)    { this._m_up = value; this.calcAngle();    }
  set m_down(value: boolean)  { this._m_down = value; this.calcAngle();  }
  set m_right(value: boolean) { this._m_right = value; this.calcAngle(); }
  set m_left(value: boolean)  { this._m_left = value; this.calcAngle();  }

  public onMouseDown(event: MouseEvent): void { this.gun.onMouseDown(event); }
  public onMouseUp(event: MouseEvent): void { this.gun.onMouseUp(event); }

  public onKeyDown(event: KeyboardEvent) {
    if      (event.code === 'KeyW') {this.m_up    = true; }
    else if (event.code === 'KeyS') {this.m_down  = true; }
    else if (event.code === 'KeyA') {this.m_left  = true; }
    else if (event.code === 'KeyD') {this.m_right = true; }
  }

  public onKeyUp(event: KeyboardEvent) {
    if      (event.code === 'KeyW') {this.m_up    = false; }
    else if (event.code === 'KeyS') {this.m_down  = false; }
    else if (event.code === 'KeyA') {this.m_left  = false; }
    else if (event.code === 'KeyD') {this.m_right = false; }
  }

}

export class ActorFrameDetails {
  healthWidth: number;

  constructor(helth: number, maxHealth: number) {
    this.healthWidth = Math.floor( 7*(helth / maxHealth) );
  }

  public getKey(): string {
    return `a-${this.healthWidth}`;
  }
}
