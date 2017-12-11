import {Pos} from './position';
import {Game} from './game';
import {ObjectFrame} from './object-frame';

export abstract class GameObject {

  public id: number;

  public game: Game;

  public p: Pos;     // the current position of this object (at the turn begin)
  public pNext: Pos; // the next (planned) position of this object ( p + speedVector )
  public outerFrame: ObjectFrame;

  public speed: number = 2;                     // movement speed (in pixels)
  public speedVector: Pos = new Pos(1,0);       // movement vector speed (length = speed )
  public directionVector: Pos = new Pos(1,0);   // direction vector (length = 1)
  public eyeDirectionVector: Pos = new Pos(1,0);   // direction vector (length = 1)

  public isAlife = false;
  public helth: number;
  public maxHelth: number;
  public deadStage: number;
  public deadStages: number;

  public r: number = 2; // default size of this object

  abstract draw(): void;

  abstract beforeTurn(): void;
  abstract turn(): void;
  abstract afterTurn(): void;

  constructor (x: number, y: number, outerFrame?: ObjectFrame) {
    this.p = new Pos(x, y);
    this.outerFrame = outerFrame || new ObjectFrame(-this.r, -this.r, this.r*2, this.r*2);
  }

  public onAddIntoGame(game: Game): void {
    this.id = game.getNextId();
    this.game = game;
    this.initMatrixLocation();
  }

  public withHelth(helth: number, deadStages: number): GameObject {
    this.isAlife = true;
    this.helth = helth;
    this.maxHelth = helth;
    this.deadStage = deadStages;
    this.deadStages = deadStages;
    return this;
  }

  public damage(damageVal: number): void {
    if (this.isAlife && this.helth > 0) {
      this.helth -= damageVal;
      this.helth = this.helth < 0 ? 0 : this.helth;
    }
  }

  public checkHealth() {
    if (!this.isAlife) { return; }

    if (this.helth <= 0) {
      this.deadStage -= 1;
      this.deadStage = this.deadStage < 0 ? 0 : this.deadStage;
    }

    if (this.helth <= 0 && this.deadStage <= 0) {
      this.game.markForDelete(this)
    }

  }

  public getDeathStageK(): number {
    return this.deadStage / this.deadStages;
  }

  // movement helper methods
  setDirectionOn_xy(targetX: number, targetY: number): void {
    const vectorX = targetX - this.p.x;
    const vectorY = targetY - this.p.y;

    const vectorLen = Math.sqrt( vectorX*vectorX + vectorY*vectorY );

    this.directionVector.x = ( vectorX / vectorLen );
    this.directionVector.y = ( vectorY / vectorLen );

    this.speedVector.x = this.directionVector.x * this.speed;
    this.speedVector.y = this.directionVector.y * this.speed;
  }

  setDirectionOn(targetPosition: Pos): void {
    this.setDirectionOn_xy(targetPosition.x, targetPosition.y)
  }

  setDirection( normalizedVector: Pos ): void { // the vector length should be = 1

    this.directionVector.x = normalizedVector.x;
    this.directionVector.y = normalizedVector.y;

    this.speedVector.x = this.directionVector.x * this.speed;
    this.speedVector.y = this.directionVector.y * this.speed;
  }

  setEyeDirectionOn(p: Pos): void {
    this.setEyeDirectionOn_xy(p.x, p.y)
  }

  setEyeDirectionOn_xy(x: number, y: number): void {
    const vectorX = x - this.p.x;
    const vectorY = y - this.p.y;

    const vectorLen = Math.sqrt( vectorX*vectorX + vectorY*vectorY );

    this.eyeDirectionVector.x = ( vectorX / vectorLen );
    this.eyeDirectionVector.y = ( vectorY / vectorLen );
  }

  public moveOn(p: Pos) {
    this.p.x = p.x;
    this.p.y = p.y;
    this.updateMatrixLoaction();
  }

  public moveTo(x: number, y: number) {
    this.p.x = x;
    this.p.y = y;
    this.updateMatrixLoaction();
  }

  public moveToSafe(x: number, y: number) {
    moveTo(x, y);
    this.moveReturnOnField();
    this.updateMatrixLoaction();
  }

  public moveForward() {
    this.p.x += this.speedVector.x;
    this.p.y += this.speedVector.y;
    this.updateMatrixLoaction();
  }

  public moveForwardSafe() {
    this.p.x += this.speedVector.x;
    this.p.y += this.speedVector.y;
    this.moveReturnOnField();
    this.updateMatrixLoaction();
  }

  protected updateMatrixLoaction(): void {
    this.pNext.setAsOffsetOf(this.p, this.speedVector);
    this.game.matrix.update(this);

  }

  protected initMatrixLocation(): void {
      this.pNext = this.p.copy();
      if (this.speedVector && (Math.abs(this.speedVector.x) + Math.abs(this.speedVector.y))> 0 ) {
        this.pNext.setAsOffsetOf(this.p, this.speedVector);
      }
      this.game.matrix.update(this);
  }

  public moveReturnOnField() {
    if (this.p.x < 0) {this.p.x = 0; } else {if (this.p.x > this.game.worldSize.x) { this.p.x = this.game.worldSize.x; }}
    if (this.p.y < 0) {this.p.y = 0; } else {if (this.p.y > this.game.worldSize.y) { this.p.y = this.game.worldSize.y; }}
  }

  public isOutOfField() {
    return this.p.x < 0 || this.p.x > this.game.worldSize.x || this.p.y < 0 || this.p.y > this.game.worldSize.y;
  }

  // draw helper methods
  public fillCircle (x: number, y: number, radius: number, fillStyle: string | CanvasGradient | CanvasPattern) {
    this.game.ctx.beginPath();
    this.game.ctx.fillStyle = fillStyle;
    this.game.ctx.arc(x, y, radius, 0, Math.PI * 2);
    this.game.ctx.fill();
  }

  public strokeCircle (x: number, y: number, radius: number, strokeStyle: string | CanvasGradient | CanvasPattern) {
    this.game.ctx.beginPath();
    this.game.ctx.lineWidth = 1;
    this.game.ctx.strokeStyle = strokeStyle;
    this.game.ctx.arc(x, y, radius, 0, Math.PI * 2);
    this.game.ctx.stroke();
  }

  public fcCircle (x: number, y: number, radius: number, strokeStyle: string | CanvasGradient | CanvasPattern, fillStyle: string | CanvasGradient | CanvasPattern) {
    const ctx = this.game.ctx;
    ctx.beginPath();
    ctx.fillStyle = fillStyle;
    ctx.strokeStyle = strokeStyle;

    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
/*
  public fcCircle (x: number, y: number, radius: number, strokeStyle: string | CanvasGradient | CanvasPattern, fillStyle: string | CanvasGradient | CanvasPattern) {
    const circle = new Path2D();
    circle.arc(x, y, radius, 0, Math.PI * 2);
    this.game.ctx.fillStyle = fillStyle;
    this.game.ctx.strokeStyle = strokeStyle;
    this.game.ctx.fill(circle);
    this.game.ctx.stroke(circle);
  }
*/

}
