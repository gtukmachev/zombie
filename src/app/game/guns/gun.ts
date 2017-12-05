

import {GameObject} from '../../../lib/game-core/game-object';
import {TimeCounter} from '../../../lib/game-core/time-counter';

export abstract class Gun {

  protected reloadingDuration: TimeCounter;

  public capacity: number;
  public bullets: number;
  protected isRelodingInProcess = false;

  public isShotModeOn = false;


  constructor(capacity: number, reloadingDuration: number) {
    this.capacity = capacity;
    this.bullets = capacity;
    this.reloadingDuration = new TimeCounter(reloadingDuration);
  }

  public shot(actor: GameObject): GameObject {
    if (!this.isShotModeOn) { return; }

    if (this.bullets > 0) {
        this.bullets -= 1;
        return this.makeBullet(actor);
    } else {
        this.startReaload();
    }

    return null;
  }

  public abstract makeBullet(actor: GameObject): GameObject;


  public drawBullets(ctx: CanvasRenderingContext2D) {

    ctx.lineWidth = 3;
    ctx.strokeStyle ='#b97686';

    for (let i = 0; i < this.bullets; i++) {
      this.drawBullet(ctx, i);
    }
  }

  public drawBullet(ctx: CanvasRenderingContext2D, i: number) {
    let path = new Path2D();

    path.moveTo(10 + (i % 100)*5, 10 + (Math.floor(i / 100))* 10 );
    path.lineTo(10 + (i % 100)*5, 10 + (Math.floor(i / 100))* 10 + 7);

    ctx.stroke(path);
  }

  public startReaload(): void {
    if (this.isRelodingInProcess) {
      return;
    }
    this.isRelodingInProcess = true;
    this.reloadingDuration.isItTime();
    this.reloadingDuration.fixLastChecking();
    this.bullets = 0;
  }

  public finishReloading(): void {
    if (this.isRelodingInProcess && this.reloadingDuration.isItTime()) {
      this.bullets = this.capacity;
      this.isRelodingInProcess = false;
    }
  }

  public onMouseDown(event: MouseEvent): void {
    this.isShotModeOn = true;
  }

  public onMouseUp(event: MouseEvent): void {
    this.isShotModeOn = false;
  }


}
