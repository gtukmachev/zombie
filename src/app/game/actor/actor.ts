import {GameObject} from '../../../lib/game-core/game-object';
import {Game} from '../../../lib/game-core/game';
import {PointBullet} from '../bullets/point-bullet';

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


  private _m_up = false;
  private _m_down = false;
  private _m_right = false;
  private _m_left = false;

  public isShotModeOn = false;

  private speed_diagonal: number;

  constructor(game: Game, x: number, y: number) {
    super(game, x, y);
    this.speed = 4;
    this.speed_diagonal = this.speed * Actor.s2;
  }


  draw(): void {
    let ctx = this.field.ctx;
    let path = new Path2D();
    path.moveTo(this.p.x, this.p.y);
    path.lineTo(this.p.x + 40 * this.eyeDirectionVector.x, this.p.y + 40 * this.eyeDirectionVector.y);
    ctx.lineWidth = 3;
    ctx.strokeStyle ='#65b9b3';
    ctx.stroke(path);

    this.fcCircle(this.p.x, this.p.y, 15, '#65b9b3', '#6a8dff')
  }

  beforeTurn(): void {
  }

  turn(): void {
    this.moveForwardSafe();
    this.setEyeDirectionOn(this.field.mousePos.x, this.field.mousePos.y);

    if (this.isShotModeOn) {
      let bullet = new PointBullet(this.field, this.p.x, this.p.y, this.eyeDirectionVector);
      this.field.add(bullet);
    }

  }

  afterTurn(): void {
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

  set m_up(value: boolean) {
    this._m_up = value; this.calcAngle();
  }

  set m_down(value: boolean) {
    this._m_down = value; this.calcAngle();
  }

  set m_right(value: boolean) {
    this._m_right = value; this.calcAngle();
  }

  set m_left(value: boolean) {
    this._m_left = value; this.calcAngle();
  }

}
