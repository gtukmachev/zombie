import {GameObject} from '../../../lib/game-core/game-object';
import {Game} from '../../../lib/game-core/game';
import {PointBullet} from '../bullets/point-bullet';
import {Gun} from '../guns/gun';
import {MachineGun} from '../guns/machine-gun';

export class Actor extends GameObject {
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

  isDrawable = true;
  r = 15;

  public gun: Gun;

  private _m_up = false;
  private _m_down = false;
  private _m_right = false;
  private _m_left = false;

  private speed_diagonal: number;

  constructor(game: Game, x: number, y: number) {
    super(game, x, y);
    this.speed = 4;
    this.speed_diagonal = this.speed * Actor.s2;

    this.gun = new MachineGun();

    this.withHelth(100, 30);

  }


  draw(): void {
    let k = this.getDeathStageK()
    let r = k < 1 ? this.r * k : this.r;
    let l = k < 1 ? (this.r*2.5) * k : (this.r*2.5);

    let ctx = this.game.ctx;
    let path = new Path2D();
    path.moveTo(this.p.x, this.p.y);
    path.lineTo(this.p.x + l * this.eyeDirectionVector.x, this.p.y + l * this.eyeDirectionVector.y);
    ctx.lineWidth = this.helth/10;

    let strokeStyle = '#65b9b3';
    let fillStyle = '#6a8dff';

    ctx.strokeStyle = strokeStyle;
    ctx.stroke(path);

    this.fcCircle(this.p.x, this.p.y, r, strokeStyle, fillStyle);


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
