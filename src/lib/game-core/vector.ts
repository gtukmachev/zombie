export class Vector {

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

  public copy(): Vector { return new Vector(this.x, this.y); }

  public distanceTo(p: Vector): number {
    const dx = p.x - this.x;
    const dy = p.y - this.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  public equals(p: Vector): boolean {
    return this.x === p.x && this.y === p.y;

  }

  public getOffsetVector(directionVector: Vector, distance: number): Vector {
    return new Vector( this.x + directionVector.x * distance, this.y + directionVector.y * distance)
  }

  public setVector(x: number, y: number) { this.x = x; this.y = y; }

  public setAs(v: Vector) { this.x = v.x; this.y = v.y; }

  public setAsOffsetOf(originalPosition: Vector, offsetVector: Vector) {
    this.x = originalPosition.x + offsetVector.x;
    this.y = originalPosition.y + offsetVector.y;
  }

  public setAsOffsetOf_xy(originalPosition: Vector, offsetX: number, offsetY: number) {
    this.x = originalPosition.x + offsetX;
    this.y = originalPosition.y + offsetY;
  }


  /**
   * restore angle by vector v, only for len(v) = 1
   */
  public angle() {

    if (this.x === 0) { return (this.y > 0) ? Vector.angle_90 : Vector.angle_270; }
    if (this.y === 0) { return (this.x > 0) ? Vector.angle_0  : Vector.angle_180; }

    if (this.x > 0 ) return  Math.asin(this.y);
    if (this.x < 0 && this.y > 0) return  Math.acos(this.x);
    if (this.x < 0 && this.y < 0) return  -Math.acos(this.x);

  }

  fLine(directionVector: Vector, x: number): number {
    return this.y + (directionVector.y / directionVector.x)*(x-this.x);

    // line L : y = kx + t
    // const x1 = this.x; // point on the line
    // const y1 = this.y;
    // const dx = directionVector.x; // line direction vector
    // const dy = directionVector.y;
    //
    // const k = dy / dx;
    // const t = y1 - k*x1;
    //
    // const y = k*x + t;
    // return y;
  }

  thisCircleWirhLineCrossing(line_p:Vector, line_directionVector: Vector, circle_radius: number): Array<Vector> {
    // line L : y = kx + t
    //const x1 = line_p.x; // point on the line
    //const y1 = line_p.y;
    //const dx = line_directionVector.x; // line direction vector
    //const dy = line_directionVector.y;

    // circle_center coordinates - get from this object

    // y = y1 + (dy/dx) * (x - x1) =>
    const k = line_directionVector.y / line_directionVector.x;
    const t = line_p.y - k*line_p.x;

    return this.circleAndLineCrossingMath(k,t, this.x, this.y, circle_radius);
  }

  circleAndLineCrossingMath(k: number, t: number, Xc: number, Yc: number, R: number): Array<Vector> {
    // 1
    //  /--
    //  |   line L:  y = kx + t
    // /
    // \                  2        2   2
    //  |   circle:  (x-Xc) + (y-Yc) = R
    //  \--

    // 2
    // ax + bx + c = 0

    let a = 1+k*k;
    let b = 2*(t*k - Xc - Yc*k);
    let c = t*t - 2*Yc*t - R*R + Yc*Yc + Xc*Xc;

    // solution of the square equation
    let res1: Vector = null;
    let res2: Vector = null;

    let D = b*b - 4*a*c;

    if (D < 0) {
      return [];

    } else if (D == 0) {
      res1 = new Vector(0,0);
      res1.x = (-b)/(2*a);
      res1.y = k*res1.x + t;
      return [res1];

    } else {
      res1 = new Vector(0,0);
      res1.x = (-b + Math.sqrt(D)) / (2*a);
      res1.y = k*res1.x + t;

      res2 = new Vector(0,0);
      res2.x = (-b - Math.sqrt(D)) / (2*a);
      res2.y = k*res2.x + t;
    }

    return [res1, res2];
  }


  setAngle(angle: number) {
    this.x = Math.cos(angle);
    this.y = Math.sin(angle);
  }

  rotateOn(angleDelta: number) {
    this.setAngle(this.angle() + angleDelta)
  }


}
