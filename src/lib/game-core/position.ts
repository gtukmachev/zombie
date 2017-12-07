export class Pos {

  static angle_0   =  0;
  static angle_90  =  Math.PI / 2;
  static angle_180 =  Math.PI / 2;
  static angle_270 = -Math.PI / 2;
  static angle_360 = Math.PI * 2;

  public x = 0;
  public y = 0;

  constructor (x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public distanceTo(p: Pos): number {
    const dx = p.x - this.x;
    const dy = p.y - this.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  public equals(p: Pos): boolean {
    return this.x === p.x && this.y === p.y;

  }

  public move(directionVector: Pos, distance: number): Pos {
    return new Pos(
      this.x + directionVector.x * distance,
      this.y + directionVector.y * distance
    )
  }

  /**
   * restore angle by vector v, only for len(v) = 1
   */
  public angle() {

    if (this.x === 0) { return (this.y > 0) ? Pos.angle_90 : Pos.angle_270; }
    if (this.y === 0) { return (this.x > 0) ? Pos.angle_0  : Pos.angle_180; }

    if (this.x > 0 ) return  Math.asin(this.y);
    if (this.x < 0 && this.y > 0) return  Math.acos(this.x);
    if (this.x < 0 && this.y < 0) return  -Math.acos(this.x);

  }

  fLine(durationUnaryVector: Pos, x: number): number {
    let y = this.y + (durationUnaryVector.y / durationUnaryVector.x)*(x-this.x);
    return y;
  }


  setAngle(angle: number) {
    this.x = Math.cos(angle);
    this.y = Math.sin(angle);
  }

  rotateOn(angleDelta: number) {
    this.setAngle(this.angle() + angleDelta)
  }


}
